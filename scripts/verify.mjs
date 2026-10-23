import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { chromium } from "playwright";
const base = process.env.PROTOTYPE_URL || "http://127.0.0.1:5173";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [],
  badResponses = [],
  externalRequests = [],
  checks = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("response", (res) => {
  if (res.status() >= 400)
    badResponses.push({ url: res.url(), status: res.status() });
});
page.on("request", (req) => {
  if (!req.url().startsWith(base) && !req.url().startsWith("data:"))
    externalRequests.push(req.url());
});
await fs.mkdir("qa", { recursive: true });
async function check(name, run) {
  await run();
  checks.push(name);
  console.log("PASS", name);
}
async function go(route) {
  await page.goto(base + route, { waitUntil: "networkidle" });
}
async function settle() {
  await page.evaluate(() => document.fonts.ready);
}
async function shot(name) {
  await settle();
  await page.screenshot({ path: "qa/" + name + ".png" });
}
async function noOverflow() {
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
    "Horizontal page overflow",
  );
}
const catalog = JSON.parse(await fs.readFile("src/catalog.json"));
const collections = JSON.parse(await fs.readFile("src/collections.json"));
try {
  await check("Every catalog image is local and present", async () => {
    assert.equal(catalog.length, 42);
    for (const p of catalog)
      for (const im of [
        ...p.images,
        ...p.variants.map((v) => v.featured_image).filter(Boolean),
      ]) {
        assert.ok(im.src.startsWith("/shop/"));
        assert.ok((await fs.stat(path.join("public", im.src))).size > 100);
      }
  });
  await check(
    "Rack opens, rotates, changes colour, navigates and closes",
    async () => {
      await go("/");
      assert.equal(await page.locator(".rack-item").count(), 7);
      await page.mouse.move(508, 420);
      await page.waitForTimeout(700);
      await page.mouse.click(508, 420);
      await page.locator('.focus[data-status="open"]').waitFor();
      assert.match(await page.locator(".info-name").innerText(), /It's Us/i);
      await page.getByRole("button", { name: "BACK", exact: true }).click();
      await page.waitForTimeout(700);
      const pink = page.getByRole("button", {
        name: "Colour: Pink",
        exact: true,
      });
      await pink.focus();
      await pink.press("Space");
      await page.waitForTimeout(1600);
      assert.equal(await pink.getAttribute("aria-pressed"), "true");
      assert.equal(
        await page
          .getByRole("button", { name: "BACK", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      await shot("desktop-rack-detail");
      await page.keyboard.press("ArrowRight");
      await page.waitForTimeout(1900);
      assert.match(await page.locator(".info-name").innerText(), /Tank Top/i);
      await page.keyboard.press("ArrowLeft");
      await page.waitForTimeout(1900);
      assert.match(await page.locator(".info-name").innerText(), /It's Us/i);
      await page.keyboard.press("Escape");
      await page.locator(".focus").waitFor({ state: "detached" });
      await shot("desktop-rack");
    },
  );
  await check("Shop homepage and complete collection render", async () => {
    await go("/shop");
    assert.match(await page.locator("h1").innerText(), /IT'S US, NEVER THEM/);
    await noOverflow();
    await shot("desktop-shop");
    await go("/collections/all");
    assert.equal(await page.locator(".product-card").count(), 42);
    await shot("desktop-collection");
  });
  await check("Every collection matches its imported membership", async () => {
    for (const c of collections) {
      await go("/collections/" + c.handle);
      assert.equal(
        await page.locator(".product-card").count(),
        c.products.length,
        c.handle,
      );
    }
  });
  await check(
    "Search, stock filter, prices, sort and empty-state reset",
    async () => {
      await go("/search?q=crimson");
      assert.equal(await page.locator(".product-card").count(), 1);
      await go("/collections/all");
      await page.getByLabel("Sort products").selectOption("low");
      const prices = await page
        .locator(".product-card .product-price")
        .allTextContents();
      const amounts = prices.map((p) => Number(p.replace(/[^\d.]/g, "")));
      assert.deepEqual(
        amounts,
        [...amounts].sort((a, b) => a - b),
      );
      await page
        .getByLabel("Availability", { exact: true })
        .selectOption("out");
      assert.equal(
        await page.locator(".product-card").count(),
        catalog.filter((p) => !p.variants.some((v) => v.available)).length,
      );
      await page
        .getByLabel("Availability", { exact: true })
        .selectOption("all");
      await page.locator(".filters summary").click();
      await page.getByLabel("Minimum price").fill("9999999");
      assert.equal(await page.locator(".product-card").count(), 0);
      await page.getByRole("button", { name: "Clear filters" }).click();
      assert.equal(await page.locator(".product-card").count(), 42);
    },
  );
  await check("All 42 product pages and images render", async () => {
    for (const product of catalog) {
      await go("/products/" + product.handle);
      assert.equal(
        (await page.locator(".product-details h1").textContent()).trim(),
        product.title.trim(),
      );
      assert.ok(
        await page
          .locator(".product-gallery img")
          .first()
          .evaluate((im) => im.complete && im.naturalWidth > 0),
        product.handle,
      );
    }
  });
  await check(
    "Product variants, gallery zoom, quantity and persisted cart",
    async () => {
      await go("/products/crimson-memory-shirt");
      await shot("desktop-product");
      await page
        .locator(".option-values")
        .getByRole("button", { name: "S", exact: true })
        .click();
      await page
        .getByRole("button", { name: "Increase Quantity", exact: true })
        .click();
      await page
        .getByRole("button", { name: "Enlarge product image 1" })
        .click();
      await page.locator(".image-dialog[open]").waitFor();
      await page.keyboard.press("Escape");
      await page
        .getByRole("button", { name: "Add to cart", exact: true })
        .click();
      await page.locator(".cart-drawer[open]").waitFor();
      assert.equal(await page.locator(".cart-line").count(), 1);
      assert.match(await page.locator(".cart-line").innerText(), /WHITE \/ S/);
      await shot("desktop-cart");
      await page.keyboard.press("Escape");
      await go("/cart");
      assert.equal(
        await page.locator(".cart-page .cart-line input").inputValue(),
        "2",
      );
      await page.getByRole("button", { name: /Increase quantity of/ }).click();
      assert.equal(
        await page.locator(".cart-page .cart-line input").inputValue(),
        "3",
      );
      await page.getByRole("button", { name: /Decrease quantity of/ }).click();
      assert.equal(
        await page.locator(".cart-page .cart-line input").inputValue(),
        "2",
      );
    },
  );
  await check(
    "Demo checkout validates, saves an order and clears cart",
    async () => {
      await page.getByRole("link", { name: "Check out", exact: true }).click();
      await page.getByRole("button", { name: "Place demo order" }).click();
      assert.equal(await page.locator(".order-success").count(), 0);
      await page.getByLabel("Email", { exact: true }).fill("demo@example.com");
      await page.getByLabel("First name", { exact: true }).fill("Demo");
      await page.getByLabel("Last name", { exact: true }).fill("Customer");
      await page
        .getByLabel("Address", { exact: true })
        .fill("1 Prototype Street");
      await page.getByLabel("City", { exact: true }).fill("Lagos");
      await page.getByLabel("State", { exact: true }).fill("Lagos");
      await shot("desktop-checkout");
      await page.getByRole("button", { name: "Place demo order" }).click();
      await page.locator(".order-success").waitFor();
      assert.match(
        await page.locator(".order-success").innerText(),
        /No payment is taken/,
      );
      const data = await page.evaluate(() => ({
        orders: JSON.parse(localStorage.getItem("snug-prototype:orders")),
        cart: JSON.parse(localStorage.getItem("snug-prototype:cart")),
      }));
      assert.equal(data.orders[0].total, 1045000);
      assert.equal(data.cart.length, 0);
      await go("/account/orders");
      assert.equal(await page.locator(".order-card").count(), 1);
      await page.locator(".order-card summary").click();
      assert.match(
        await page.locator(".saved-order-item").innerText(),
        /Quantity 2/,
      );
    },
  );
  await check("Demo account, contact and 404 flows", async () => {
    await go("/account");
    await page.getByLabel("Name", { exact: true }).fill("Demo");
    await page.getByLabel("Email", { exact: true }).fill("demo@example.com");
    await page
      .getByRole("button", { name: "Continue to demo account" })
      .click();
    assert.match(await page.locator(".account-welcome").innerText(), /Demo/);
    await page.getByRole("button", { name: "Log out" }).click();
    assert.equal(await page.locator(".account-form").count(), 1);
    await go("/pages/contact");
    await page.getByLabel("Name", { exact: true }).fill("Demo");
    await page.getByLabel("Email", { exact: true }).fill("demo@example.com");
    await page.getByLabel("Comment", { exact: true }).fill("Prototype message");
    await page.getByRole("button", { name: "Save demo message" }).click();
    assert.match(
      await page.locator(".form-success").innerText(),
      /No email was sent/,
    );
    await go("/does-not-exist");
    assert.equal(await page.locator(".not-found").count(), 1);
  });
  await check("Mobile rack, shop, navigation, product and cart", async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const route of [
      "/",
      "/shop",
      "/collections/all",
      "/products/crimson-memory-shirt",
      "/cart",
      "/pages/contact",
      "/pages/about",
      "/account/orders",
    ]) {
      await go(route);
      await noOverflow();
      await shot(
        "mobile-" + (route === "/" ? "rack" : route.replaceAll("/", "-")),
      );
    }
    await go("/shop");
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.locator(".nav-dialog[open]").waitFor();
    await page.keyboard.press("Escape");
    await page.getByRole("button", { name: "Search", exact: true }).click();
    await page
      .getByRole("searchbox", { name: "Search products" })
      .fill("crimson");
    assert.equal(await page.locator(".search-preview>a").count(), 1);
    await page.keyboard.press("Escape");
    await go("/");
    const rect = await page.locator(".rack-item").nth(1).boundingBox();
    await page.mouse.click(rect.x, rect.y + 80);
    await page.locator('.focus[data-status="open"]').waitFor();
    await noOverflow();
    await shot("mobile-rack-detail");
    await page.keyboard.press("Escape");
  });
  await check(
    "No runtime errors, missing assets or third-party requests",
    async () => {
      assert.deepEqual(errors, []);
      assert.deepEqual(badResponses, []);
      assert.deepEqual(externalRequests, []);
    },
  );
  await fs.writeFile(
    "qa/verification.json",
    JSON.stringify(
      { passed: true, checks, errors, badResponses, externalRequests },
      null,
      2,
    ),
  );
  console.log("ALL", checks.length, "CHECKS PASSED");
} catch (error) {
  await fs.writeFile(
    "qa/verification.json",
    JSON.stringify(
      {
        passed: false,
        checks,
        error: String(error),
        errors,
        badResponses,
        externalRequests,
      },
      null,
      2,
    ),
  );
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser.close();
}
