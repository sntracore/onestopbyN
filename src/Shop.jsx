import BrandLogo from "./BrandLogo";
import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import {
  catalog,
  getProduct,
  available,
  price,
  money,
  readSaved,
  save,
  cartItems,
  subtotal,
} from "./store";
import collections from "./collections.json";
import media from "./shop-media.json";
import "./shop.css";
const Store = createContext();
const useStore = () => useContext(Store);
const imageNamed = (name) => media.images.find((src) => src.endsWith(name));
const productUrl = (p) => "/products/" + p.handle;
const demoMessage = "Prototype only. No payment is taken and no order is sent.";
function Icon({ name }) {
  const shapes = {
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    bag: (
      <>
        <rect x="5" y="7" width="14" height="14" rx="2" />
        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5 21c0-9 14-9 14 0Z" />
      </>
    ),
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    arrow: <path d="M4 12h16m-7-7 7 7-7 7" />,
    check: <path d="m5 12 4 4L20 5" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[name]}
    </svg>
  );
}
function Modal({ open, onClose, title, children, kind = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={"shop-modal " + kind}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label={title}
    >
      <div className="modal-heading">
        <h2>{title}</h2>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label={"Close " + title}
        >
          <Icon name="close" />
        </button>
      </div>
      {children}
    </dialog>
  );
}
function Header({ light = false }) {
  const { items, setCartOpen } = useStore();
  const [menu, setMenu] = useState(false),
    [search, setSearch] = useState(false),
    [query, setQuery] = useState(""),
    [region, setRegion] = useState(false);
  const results = query.trim()
    ? catalog
        .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
    : catalog.slice(0, 4);
  return (
    <>
      <header className={"shop-header " + (light ? "light" : "")}>
        <button
          className="mobile-menu icon-button"
          aria-label="Open navigation"
          onClick={() => setMenu(true)}
        >
          <Icon name="menu" />
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/shop">ONE STOP BY N</a>
          <div className="nav-dropdown">
            <a href="/collections/all">SNUG WARDROBE</a>
            <div className="nav-submenu">
              {["belts", "accessories", "denim", "tees", "headwares"].map(
                (c) => (
                  <a key={c} href={"/collections/" + c}>
                    {c.toUpperCase()}
                  </a>
                ),
              )}
              <a href="/">THE RACK</a>
            </div>
          </div>
          <a href="/pages/new-arrivals">NEW ARRIVALS</a>
          <a className="extra-link" href="/account">
            LOGIN
          </a>
          <a className="extra-link" href="/account/orders">
            ORDERS
          </a>
          <button className="extra-link" onClick={() => setSearch(true)}>
            SEARCH
          </button>
          <details className="more-nav">
            <summary>MORE</summary>
            <div className="nav-submenu">
              <a href="/account">LOGIN</a>
              <a href="/account/orders">ORDERS</a>
              <button onClick={() => setSearch(true)}>SEARCH</button>
              <a href="/pages/about">ABOUT</a>
              <a href="/pages/contact">CONTACT</a>
              <a href="/">THE RACK</a>
            </div>
          </details>
        </nav>
        <a
          className="shop-logo"
          href="/shop"
          aria-label="One Stop By N shop home"
        >
          <BrandLogo />
        </a>
        <div className="header-actions">
          <button
            className="currency-button"
            onClick={() => setRegion(true)}
            aria-label="Region and language selector"
          >
            NGN⌄
          </button>
          <button
            className="icon-button"
            onClick={() => setSearch(true)}
            aria-label="Search"
          >
            <Icon name="search" />
          </button>
          <a
            className="icon-button account-icon"
            href="/account"
            aria-label="Account"
          >
            <Icon name="user" />
          </a>
          <button
            className="icon-button"
            onClick={() => setCartOpen(true)}
            aria-label={
              "Open cart, " +
              items.reduce((n, i) => n + i.quantity, 0) +
              " items"
            }
          >
            <Icon name="bag" />
            {items.length > 0 && (
              <span className="cart-count">
                {items.reduce((n, i) => n + i.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>
      <Modal
        open={menu}
        onClose={() => setMenu(false)}
        title="ONE STOP BY N"
        kind="nav-dialog"
      >
        <nav className="mobile-links">
          {[
            ["ONE STOP BY N", "/shop"],
            ["SNUG WARDROBE", "/collections/all"],
            ["NEW ARRIVALS", "/pages/new-arrivals"],
            ...collections
              .filter((c) => !["frontpage", "wardrobe"].includes(c.handle))
              .map((c) => [c.title.toUpperCase(), "/collections/" + c.handle]),
            ["THE RACK", "/"],
            ["LOGIN", "/account"],
            ["ORDERS", "/account/orders"],
            ["CONTACT", "/pages/contact"],
          ].map(([label, url]) => (
            <a href={url} key={url}>
              {label}
            </a>
          ))}
        </nav>
      </Modal>
      <Modal
        open={search}
        onClose={() => setSearch(false)}
        title="Search"
        kind="search-dialog"
      >
        <form action="/search" className="search-form">
          <input
            autoFocus={search}
            type="search"
            name="q"
            aria-label="Search products"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button aria-label="Submit search">
            <Icon name="search" />
          </button>
        </form>
        <h3>{query ? "Products" : "You might like"}</h3>
        <div className="search-preview">
          {results.map((p) => (
            <a href={productUrl(p)} key={p.id}>
              <img src={p.images[0]?.src} alt="" />
              <span>
                {p.title}
                <small>{money(price(p))}</small>
              </span>
              <Icon name="arrow" />
            </a>
          ))}
          {!results.length && (
            <p>No results for “{query}”. Try another search.</p>
          )}
        </div>
        <a
          className="outline-button"
          href={"/search?q=" + encodeURIComponent(query)}
        >
          View all results
        </a>
      </Modal>
      <Modal
        open={region}
        onClose={() => setRegion(false)}
        title="Country/Region"
      >
        <p>Prices are shown in Nigerian naira.</p>
        <label className="field">
          Country/Region
          <select
            defaultValue={readSaved("region", "Nigeria")}
            onChange={(e) => save("region", e.target.value)}
          >
            {[
              "Nigeria",
              "Ghana",
              "United Kingdom",
              "United States",
              "Canada",
              "South Africa",
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Language
          <select>
            <option>English</option>
          </select>
        </label>
        <button className="black-button" onClick={() => setRegion(false)}>
          Done
        </button>
      </Modal>
    </>
  );
}
function Footer() {
  return (
    <footer className="shop-footer">
      <a className="all-products" href="/collections/all">
        See All Products <Icon name="arrow" />
      </a>
      <div className="footer-values">
        <div>
          <h2>Stay Snugged.</h2>
          <p>
            A reminder to stay comfortable, stay confident, and stay true to
            yourself. Every fit, every day, every season.
          </p>
        </div>
        <div>
          <h2>Stay Fly</h2>
          <p>
            Be all about keeping your style sharp, effortless, and confident no
            matter the moment.
          </p>
        </div>
        <div>
          <h2>It's Us, Never Them.</h2>
          <p>
            Loyalty over noise, unity over comparison. Moving as one, building
            your own wave, and not chasing anyone else’s approval.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 <a href="/shop">ONE STOP BY N</a>
        </span>
        <nav>
          <a href="/pages/about">About</a>
          <a href="/pages/contact">Contact</a>
          <a href="/policies/privacy-policy">Privacy</a>
          <a href="/">The rack</a>
        </nav>
      </div>
    </footer>
  );
}
function ProductCard({ product, stock = false }) {
  const [index, setIndex] = useState(0);
  const p = product;
  const sold = !available(p);
  return (
    <article className="product-card">
      <div className="card-image">
        <a href={productUrl(p)}>
          <img src={p.images[index]?.src} alt={p.title} loading="lazy" />
        </a>
        {sold && !stock && <span className="sold-badge">SOLD OUT</span>}
        {p.images.length > 1 && (
          <div className="card-arrows">
            <button
              aria-label={"Previous image of " + p.title}
              onClick={() =>
                setIndex((index - 1 + p.images.length) % p.images.length)
              }
            >
              ‹
            </button>
            <button
              aria-label={"Next image of " + p.title}
              onClick={() => setIndex((index + 1) % p.images.length)}
            >
              ›
            </button>
          </div>
        )}
        {!stock && (
          <a className="quick-choose" href={productUrl(p)}>
            Choose +
          </a>
        )}
      </div>
      <a href={productUrl(p)}>
        <h3>{p.title}</h3>
        <p className="product-price">{money(price(p))}</p>
        {stock && <p>{sold ? "Sold out" : "In stock"}</p>}
      </a>
    </article>
  );
}
const special = [
  "its-us-never-them-waxed-flared-denim-pants",
  "snug-jersey-blue",
  "black-wax-denim",
  "crimson-memory-shirt",
  "silicone-logo-tee",
  "distressed-sleeveless-vintage-light-beige",
  "its-us-never-them-tee-pink",
  "distressed-logo-print-t-shirt",
  "it-s-us-double-waisted-denim",
  "snug-wrld-outlaw-set",
  "double-layered-long-sleeve-brown-cream",
  "it-s-us-longsleeve-rhinestone-black",
  "snug-wrld-3-in-1-logo-print-boxer-brief",
  "crystal-logo-tee",
  "ribbed-logo-beanie-white",
  "claystone-cargo-jort",
];
function Home() {
  const feature = getProduct("black-wax-denim-jacket");
  return (
    <>
      <section className="shop-hero">
        <img
          src={imageNamed("IMG_2546.jpg")}
          alt="Snug Wrld rhinestone lettering shirt"
          fetchPriority="high"
        />
        <h1>
          IT'S US, NEVER THEM. THEY CAN'T CLONE OUR SWAG—
          <br />
          ORIGINALS DON'T COME WITH DUPLICATES.
        </h1>
      </section>
      <section className="special-arrivals">
        <h2>SPECIAL ARRIVALS</h2>
        <div className="product-grid special-grid">
          {special
            .map((h) => getProduct(h))
            .filter(Boolean)
            .map((p) => (
              <ProductCard product={p} stock key={p.id} />
            ))}
        </div>
      </section>
      <section className="editorial-pair">
        <img
          src={imageNamed("IMG_2549.jpg")}
          alt="Crimson Memory editorial"
          loading="lazy"
        />
        <img
          src={imageNamed("IMG_2548.jpg")}
          alt="Crimson Memory shirt details"
          loading="lazy"
        />
        <h2>CRIMSON - A MEMORY THAT TELLS ITSELF</h2>
      </section>
      <div className="product-grid special-grid secondary-grid">
        {[
          "snug-denim-jort",
          "red-belt",
          "snug-wrld-varsity-jackets",
          "snug-camo-belt",
          "minted-shirt",
          "minted-hoodie",
          "snug-jersey-blue",
          "snug-wrld-zipped-up-jacket",
        ]
          .map(getProduct)
          .filter(Boolean)
          .map((p) => (
            <ProductCard product={p} stock key={p.id} />
          ))}
      </div>
      <section className="featured">
        <h2>FEATURED PRODUCT</h2>
        <div className="feature-layout">
          <div className="feature-photos">
            <img
              src={imageNamed("IMG_2551.jpg")}
              alt="Snug Wrld waxed jacket editorial"
              loading="lazy"
            />
            <img
              src={imageNamed("IMG_2550.jpg")}
              alt="Waxed jacket detail"
              loading="lazy"
            />
          </div>
          <div className="feature-product">
            <ProductCard product={feature} />
            <a className="black-button" href={productUrl(feature)}>
              Choose
            </a>
          </div>
        </div>
      </section>
      <section className="wardrobe">
        <div className="section-heading">
          <h2>GENERAL WARDROBE</h2>
          <a href="/collections/all">SHOP ALL ↗</a>
        </div>
        <div className="product-grid catalog-grid">
          {[...catalog]
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 16)
            .map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
        </div>
      </section>
      <section className="closing-editorial">
        <div>
          <img
            src={imageNamed("IMG_2552.jpg")}
            alt="Snug Wrld streetwear editorial"
            loading="lazy"
          />
          <img
            src={imageNamed("IMG_2553.jpg")}
            alt="Snug Wrld collection"
            loading="lazy"
          />
        </div>
        <h2>THEY CAN'T CLONE US!</h2>
        <p>
          They gon try to copy our style, our swag but they can never clone us.
        </p>
        <a className="black-button" href="/collections/all">
          Shop now
        </a>
      </section>
    </>
  );
}
function Collection({ handle, search = false, newArrivals = false }) {
  const params = new URLSearchParams(location.search);
  const [query, setQuery] = useState(params.get("q") || "");
  const [stock, setStock] = useState("all"),
    [sort, setSort] = useState("title"),
    [min, setMin] = useState(""),
    [max, setMax] = useState(""),
    [dense, setDense] = useState(false);
  const collection = collections.find((c) => c.handle === handle);
  let products = collection?.products
    ? catalog.filter((p) => collection.products.includes(p.handle))
    : catalog;
  if (newArrivals) products = catalog.slice(0, 16);
  if (search)
    products = products.filter((p) =>
      (p.title + " " + p.product_type + " " + p.tags.join(" "))
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
    );
  products = products.filter(
    (p) =>
      (stock === "all" || available(p) === (stock === "in")) &&
      (!min || price(p) >= Number(min)) &&
      (!max || price(p) <= Number(max)),
  );
  products = [...products].sort((a, b) =>
    sort === "low"
      ? price(a) - price(b)
      : sort === "high"
        ? price(b) - price(a)
        : sort === "new"
          ? b.id - a.id
          : sort === "reverse"
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title),
  );
  return (
    <section className="collection-page">
      <h1>
        {search
          ? "SEARCH"
          : newArrivals
            ? "NEW ARRIVALS"
            : collection
              ? collection.title.toUpperCase()
              : "COLLECTION"}
      </h1>
      {search && (
        <form className="search-form page-search" action="/search">
          <input
            aria-label="Search products"
            name="q"
            value={query}
            placeholder="Search products"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button aria-label="Search products">
            <Icon name="search" />
          </button>
        </form>
      )}
      <div className="collection-toolbar">
        <div className="filters">
          <label>
            Availability{" "}
            <select
              aria-label="Availability"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            >
              <option value="all">All</option>
              <option value="in">In stock</option>
              <option value="out">Sold out</option>
            </select>
          </label>
          <details>
            <summary>Price⌄</summary>
            <div className="price-popover">
              <label>
                From ₦
                <input
                  type="number"
                  min="0"
                  aria-label="Minimum price"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
              </label>
              <label>
                To ₦
                <input
                  type="number"
                  min="0"
                  aria-label="Maximum price"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </label>
              <button
                onClick={() => {
                  setMin("");
                  setMax("");
                }}
              >
                Reset
              </button>
            </div>
          </details>
        </div>
        <div className="sort-controls">
          <span aria-live="polite">{products.length} items</span>
          <label>
            Sort{" "}
            <select
              aria-label="Sort products"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="title">Alphabetically, A–Z</option>
              <option value="reverse">Alphabetically, Z–A</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
              <option value="new">Date, new to old</option>
            </select>
          </label>
          <button
            className="grid-button"
            aria-label="Toggle grid density"
            aria-pressed={dense}
            onClick={() => setDense(!dense)}
          >
            {dense ? "▦" : "▥"}
          </button>
        </div>
      </div>
      <div className={"product-grid catalog-grid " + (dense ? "dense" : "")}>
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
      {!products.length && (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try a different search or clear your filters.</p>
          <button
            className="outline-button"
            onClick={() => {
              setQuery("");
              setStock("all");
              setMin("");
              setMax("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
function Quantity({ value, onChange, label = "Quantity" }) {
  return (
    <div className="quantity-control">
      <button
        type="button"
        aria-label={"Decrease " + label}
        disabled={value <= 1}
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        −
      </button>
      <input
        aria-label={label}
        type="number"
        min="1"
        max="99"
        value={value}
        onChange={(e) =>
          onChange(Math.max(1, Math.min(99, Number(e.target.value) || 1)))
        }
      />
      <button
        type="button"
        aria-label={"Increase " + label}
        disabled={value >= 99}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
function Product({ product: p }) {
  const { addItem } = useStore();
  const initial =
    p.variants.find(
      (v) =>
        String(v.id) === new URLSearchParams(location.search).get("variant"),
    ) ||
    p.variants.find((v) => v.available) ||
    p.variants[0];
  const [options, setOptions] = useState(
      p.options.map((o, i) => initial["option" + (i + 1)]),
    ),
    [quantity, setQuantity] = useState(1),
    [zoom, setZoom] = useState(null);
  const variant = p.variants.find((v) =>
    options.every((o, i) => v["option" + (i + 1)] === o),
  );
  const selectedImage = variant?.featured_image?.src;
  const images = selectedImage
    ? [
        p.images.find((i) => i.src === selectedImage),
        ...p.images.filter((i) => i.src !== selectedImage),
      ].filter(Boolean)
    : p.images;
  useEffect(() => {
    document.title = p.title + " — One Stop By N";
  }, [p]);
  function selectOption(index, value) {
    const next = options.map((o, i) => (i === index ? value : o));
    setOptions(next);
    const v = p.variants.find((v) =>
      next.every((o, i) => v["option" + (i + 1)] === o),
    );
    if (v) history.replaceState(null, "", productUrl(p) + "?variant=" + v.id);
  }
  function add(buyNow = false) {
    if (!variant?.available) return;
    addItem(p, variant, quantity, !buyNow);
    if (buyNow) location.href = "/checkout";
  }
  return (
    <>
      <section className="product-page">
        <div className="product-gallery">
          {images.map((im, i) => (
            <button
              key={im.id}
              onClick={() => setZoom(i)}
              aria-label={"Enlarge product image " + (i + 1)}
            >
              <img
                src={im.src}
                alt={im.alt || p.title + " — image " + (i + 1)}
                loading={i < 2 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
        <div className="product-details">
          <h1>{p.title}</h1>
          <p className="detail-price">
            {money(Number(variant?.price || price(p)))}
          </p>
          <div className="variant-picker">
            {p.options
              .filter((o) => o.name !== "Title")
              .map((o) => {
                const index = p.options.indexOf(o);
                return (
                  <fieldset key={o.name}>
                    <legend>
                      {o.name.toUpperCase()}{" "}
                      {o.values.length === 1 && <span>{o.values[0]}</span>}
                    </legend>
                    {o.values.length > 1 && (
                      <div className="option-values">
                        {o.values.map((value) => (
                          <button
                            key={value}
                            aria-pressed={options[index] === value}
                            onClick={() => selectOption(index, value)}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    )}
                  </fieldset>
                );
              })}
          </div>
          <div className="add-row">
            <Quantity value={quantity} onChange={setQuantity} />
            <button
              className="black-button"
              disabled={!variant?.available}
              onClick={() => add()}
            >
              <Icon name="bag" />
              {variant?.available
                ? "Add to cart"
                : variant
                  ? "Sold out"
                  : "Unavailable"}
            </button>
          </div>
          <button
            className="black-button buy-button"
            disabled={!variant?.available}
            onClick={() => add(true)}
          >
            Buy it now
          </button>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: p.body_html }}
          />
          {!p.body_html && (
            <p className="product-description">
              {p.title}. From the Snug Wrld collection.
            </p>
          )}
        </div>
      </section>
      <section className="related-products">
        <h2>YOU MAY ALSO LIKE</h2>
        <div className="product-grid special-grid">
          {catalog
            .filter((q) => q.id !== p.id && q.product_type === p.product_type)
            .concat(
              catalog.filter(
                (q) => q.id !== p.id && q.product_type !== p.product_type,
              ),
            )
            .slice(0, 4)
            .map((q) => (
              <ProductCard key={q.id} product={q} />
            ))}
        </div>
      </section>
      <Modal
        open={zoom !== null}
        onClose={() => setZoom(null)}
        title={p.title}
        kind="image-dialog"
      >
        {zoom !== null && (
          <>
            <img src={images[zoom]?.src} alt={p.title} />
            <div className="zoom-controls">
              <button
                onClick={() =>
                  setZoom((zoom - 1 + images.length) % images.length)
                }
                aria-label="Previous image"
              >
                ←
              </button>
              <span>
                {zoom + 1} / {images.length}
              </span>
              <button
                onClick={() => setZoom((zoom + 1) % images.length)}
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
function CartLines() {
  const { items, updateItem, removeItem } = useStore();
  return (
    <div className="cart-lines">
      {items.map((item) => (
        <div className="cart-line" key={item.variantId}>
          <a href={productUrl(item.product)}>
            <img
              src={
                item.variant.featured_image?.src || item.product.images[0]?.src
              }
              alt={item.product.title}
            />
          </a>
          <div>
            <a href={productUrl(item.product)}>
              <h3>{item.product.title}</h3>
            </a>
            <p>
              {item.variant.title === "Default Title" ? "" : item.variant.title}
            </p>
            <p>{money(Number(item.variant.price))}</p>
            <Quantity
              value={item.quantity}
              label={"quantity of " + item.product.title}
              onChange={(q) => updateItem(item.variantId, q)}
            />
            <button
              className="remove-item"
              onClick={() => removeItem(item.variantId)}
            >
              Remove
            </button>
          </div>
          <strong>{money(Number(item.variant.price) * item.quantity)}</strong>
        </div>
      ))}
    </div>
  );
}
function CartContent() {
  const { items } = useStore();
  return items.length ? (
    <>
      <CartLines />
      <div className="cart-summary">
        <div>
          <strong>Estimated total</strong>
          <strong>{money(subtotal(items))}</strong>
        </div>
        <p>Shipping calculated at checkout.</p>
        <a className="black-button" href="/checkout">
          Check out
        </a>
        <a className="underlined" href="/collections/all">
          Continue shopping
        </a>
      </div>
    </>
  ) : (
    <div className="empty-state">
      <Icon name="bag" />
      <h2>Your cart is empty</h2>
      <a className="black-button" href="/collections/all">
        Continue shopping
      </a>
      <p>
        Have an account?{" "}
        <a className="underlined" href="/account">
          Log in
        </a>
      </p>
    </div>
  );
}
function Checkout() {
  const { items, clearCart } = useStore();
  const [delivery, setDelivery] = useState("standard"),
    [completed, setCompleted] = useState(null),
    [discount, setDiscount] = useState(""),
    [discountNote, setDiscountNote] = useState("");
  const shipping = delivery === "pickup" ? 0 : 5000;
  const total = subtotal(items) + shipping;
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const order = {
      id: "DEMO-" + Date.now().toString(36).toUpperCase(),
      date: new Date().toISOString(),
      name: data.get("firstName"),
      email: data.get("email"),
      items: items.map((i) => ({
        title: i.product.title,
        variant: i.variant.title,
        quantity: i.quantity,
        price: Number(i.variant.price),
        image: i.variant.featured_image?.src || i.product.images[0]?.src,
      })),
      subtotal: subtotal(items),
      shipping,
      total,
      status: "Demo order",
    };
    save("orders", [order, ...readSaved("orders", [])]);
    clearCart();
    setCompleted(order);
    window.scrollTo(0, 0);
  }
  if (completed)
    return (
      <section className="order-success">
        <span className="success-mark">
          <Icon name="check" />
        </span>
        <p>{completed.id}</p>
        <h1>Thank you, {completed.name}!</h1>
        <h2>Your demo order is confirmed.</h2>
        <p>{demoMessage}</p>
        <p>Total: {money(completed.total)}</p>
        <a className="black-button" href="/account/orders">
          View demo orders
        </a>
        <a className="underlined" href="/shop">
          Continue shopping
        </a>
      </section>
    );
  if (!items.length)
    return (
      <section className="cart-page">
        <h1>Checkout</h1>
        <CartContent />
      </section>
    );
  return (
    <section className="checkout-layout">
      <form className="checkout-form" onSubmit={submit}>
        <a href="/shop">
          <BrandLogo size={90} />
        </a>
        <p className="prototype-note">{demoMessage}</p>
        <h2>Contact</h2>
        <label className="field">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
          />
        </label>
        <label className="checkbox-label">
          <input type="checkbox" /> Email me with news and offers (demo)
        </label>
        <h2>Delivery</h2>
        <label className="field">
          Country/Region
          <select name="country" autoComplete="country-name">
            <option>Nigeria</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Ghana</option>
            <option>Canada</option>
          </select>
        </label>
        <div className="field-pair">
          <label className="field">
            First name
            <input required name="firstName" autoComplete="given-name" />
          </label>
          <label className="field">
            Last name
            <input required name="lastName" autoComplete="family-name" />
          </label>
        </div>
        <label className="field">
          Address
          <input required name="address" autoComplete="street-address" />
        </label>
        <label className="field">
          Apartment, suite, etc. (optional)
          <input name="apartment" />
        </label>
        <div className="field-pair">
          <label className="field">
            City
            <input required name="city" autoComplete="address-level2" />
          </label>
          <label className="field">
            State
            <input required name="state" autoComplete="address-level1" />
          </label>
        </div>
        <label className="field">
          Postal code (optional)
          <input name="postal" autoComplete="postal-code" />
        </label>
        <label className="field">
          Phone (optional)
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <h2>Delivery method</h2>
        <label className="delivery-option">
          <input
            type="radio"
            name="delivery"
            checked={delivery === "standard"}
            onChange={() => setDelivery("standard")}
          />
          <span>
            Standard delivery<small>Illustrative prototype rate</small>
          </span>
          {money(5000)}
        </label>
        <label className="delivery-option">
          <input
            type="radio"
            name="delivery"
            checked={delivery === "pickup"}
            onChange={() => setDelivery("pickup")}
          />
          <span>
            Pickup<small>Demo pickup option</small>
          </span>
          Free
        </label>
        <h2>Complete your demo</h2>
        <p>No card or payment details are required.</p>
        <button className="black-button" type="submit">
          Place demo order
        </button>
        <a className="underlined" href="/cart">
          Return to cart
        </a>
      </form>
      <aside className="checkout-summary">
        <h2>Order summary</h2>
        {items.map((i) => (
          <div className="checkout-item" key={i.variantId}>
            <div>
              <img
                src={i.variant.featured_image?.src || i.product.images[0]?.src}
                alt=""
              />
              <span>{i.quantity}</span>
            </div>
            <p>
              {i.product.title}
              <small>{i.variant.title}</small>
            </p>
            <strong>{money(Number(i.variant.price) * i.quantity)}</strong>
          </div>
        ))}
        <div className="discount-row">
          <input
            aria-label="Discount code"
            placeholder="Discount code"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button
            className="outline-button"
            onClick={() =>
              setDiscountNote(
                discount
                  ? "Discount codes are not enabled in this prototype."
                  : "Enter a discount code.",
              )
            }
          >
            Apply
          </button>
        </div>
        <p role="status">{discountNote}</p>
        <dl>
          <div>
            <dt>Subtotal</dt>
            <dd>{money(subtotal(items))}</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>{money(shipping)}</dd>
          </div>
          <div className="checkout-total">
            <dt>Total</dt>
            <dd>
              <small>NGN</small> {money(total)}
            </dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
function Account({ ordersOnly = false }) {
  const [profile, setProfile] = useState(readSaved("profile", null));
  const orders = readSaved("orders", []);
  function login(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const p = { name: f.get("name"), email: f.get("email") };
    save("profile", p);
    setProfile(p);
  }
  return (
    <section className="account-page">
      <h1>{ordersOnly ? "Orders" : profile ? "Your account" : "Log in"}</h1>
      {!profile && !ordersOnly ? (
        <form className="account-form" onSubmit={login}>
          <p>
            Enter the prototype as a demo customer. No password or real account
            is needed.
          </p>
          <label className="field">
            Name
            <input required name="name" autoComplete="given-name" />
          </label>
          <label className="field">
            Email
            <input required name="email" type="email" autoComplete="email" />
          </label>
          <button className="black-button">Continue to demo account</button>
        </form>
      ) : (
        <>
          {profile && (
            <div className="account-welcome">
              <p>
                Welcome, {profile.name}
                <small>{profile.email}</small>
              </p>
              <button
                className="underlined"
                onClick={() => {
                  save("profile", null);
                  setProfile(null);
                }}
              >
                Log out
              </button>
            </div>
          )}
          <p className="prototype-note">Demo orders saved in this browser.</p>
          {!orders.length ? (
            <div className="empty-state">
              <h2>No orders yet</h2>
              <p>Your demo orders will appear here.</p>
              <a className="black-button" href="/shop">
                Start shopping
              </a>
            </div>
          ) : (
            orders.map((order) => (
              <details className="order-card" key={order.id}>
                <summary>
                  <strong>{order.id}</strong>
                  <span>{new Date(order.date).toLocaleDateString()}</span>
                  <span>{money(order.total)}</span>
                  <span>Demo order⌄</span>
                </summary>
                {order.items.map((i, index) => (
                  <div className="saved-order-item" key={index}>
                    <img src={i.image} alt="" />
                    <p>
                      {i.title}
                      <small>
                        {i.variant} · Quantity {i.quantity}
                      </small>
                    </p>
                    <strong>{money(i.price * i.quantity)}</strong>
                  </div>
                ))}
                <p>{demoMessage}</p>
              </details>
            ))
          )}
        </>
      )}
    </section>
  );
}
function ContentPage({ page }) {
  const [sent, setSent] = useState(false);
  if (page === "contact")
    return (
      <section className="content-page">
        <h1>CONTACT</h1>
        <p>Get in touch with One Stop By N.</p>
        {sent ? (
          <div className="form-success" role="status">
            <h2>Message saved</h2>
            <p>
              Your message was saved in this browser for the prototype. No email
              was sent.
            </p>
            <button className="outline-button" onClick={() => setSent(false)}>
              Write another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              save("contact-drafts", [
                Object.fromEntries(new FormData(e.currentTarget)),
                ...readSaved("contact-drafts", []),
              ]);
              setSent(true);
            }}
          >
            <div className="field-pair">
              <label className="field">
                Name
                <input required name="name" autoComplete="name" />
              </label>
              <label className="field">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="field">
              Phone number
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="field">
              Comment
              <textarea required name="comment" rows="6" />
            </label>
            <button className="black-button">Save demo message</button>
          </form>
        )}
      </section>
    );
  if (page === "about")
    return (
      <section className="about-page">
        <img src={imageNamed("IMG_2552.jpg")} alt="Snug Wrld" />
        <div>
          <h1>IT'S US, NEVER THEM.</h1>
          <h2>Stay Snugged. Stay Fly.</h2>
          <p>
            A reminder to stay comfortable, stay confident, and stay true to
            yourself. Every fit, every day, every season.
          </p>
          <p>
            Loyalty over noise, unity over comparison. Moving as one, building
            your own wave, and not chasing anyone else’s approval.
          </p>
          <a className="black-button" href="/collections/all">
            Explore the wardrobe
          </a>
          <a className="underlined" href="/">
            Back to the rack
          </a>
        </div>
      </section>
    );
  return (
    <section className="content-page">
      <h1>Prototype privacy</h1>
      <p>
        This independent prototype stores your cart, demo account, demo orders,
        and contact drafts in this browser only. It does not send these details
        to Snug Wrld, Shopify, or a payment processor.
      </p>
      <p>
        No payments are collected. Demo orders do not reserve stock or arrange
        delivery.
      </p>
      <button
        className="outline-button"
        onClick={() => {
          ["cart", "profile", "orders", "contact-drafts", "region"].forEach(
            (k) => localStorage.removeItem("snug-prototype:" + k),
          );
          location.href = "/shop";
        }}
      >
        Clear prototype data
      </button>
    </section>
  );
}
function NotFound() {
  return (
    <section className="empty-state not-found">
      <p>404</p>
      <h1>That page isn't here.</h1>
      <a className="black-button" href="/shop">
        Back to the shop
      </a>
      <a className="underlined" href="/">
        Explore the rack
      </a>
    </section>
  );
}
export default function Shop() {
  const [cart, setCart] = useState(() => readSaved("cart", [])),
    [cartOpen, setCartOpen] = useState(false);
  const items = cartItems(cart);
  useEffect(() => {
    document.body.classList.add("shop-active");
    return () => document.body.classList.remove("shop-active");
  }, []);
  function writeCart(next) {
    setCart(next);
    save("cart", next);
  }
  function addItem(product, variant, quantity, open = true) {
    const current = cartItems(readSaved("cart", [])).map(
      ({ handle, variantId, quantity }) => ({ handle, variantId, quantity }),
    );
    const existing = current.find((i) => i.variantId === variant.id);
    const next = existing
      ? current.map((i) =>
          i.variantId === variant.id
            ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
            : i,
        )
      : [
          ...current,
          { handle: product.handle, variantId: variant.id, quantity },
        ];
    writeCart(next);
    if (open) setCartOpen(true);
  }
  const value = {
    items,
    addItem,
    setCartOpen,
    updateItem: (id, quantity) =>
      writeCart(
        items.map(({ handle, variantId, quantity: q }) => ({
          handle,
          variantId,
          quantity: variantId === id ? quantity : q,
        })),
      ),
    removeItem: (id) =>
      writeCart(
        items
          .filter((i) => i.variantId !== id)
          .map(({ handle, variantId, quantity }) => ({
            handle,
            variantId,
            quantity,
          })),
      ),
    clearCart: () => writeCart([]),
  };
  const path = decodeURIComponent(location.pathname).replace(/\/$/, "");
  const product = path.startsWith("/products/")
    ? getProduct(path.split("/")[2])
    : null;
  let content;
  if (path === "/shop") content = <Home />;
  else if (path.startsWith("/products/"))
    content = product ? <Product product={product} /> : <NotFound />;
  else if (path.startsWith("/collections/"))
    content =
      path.split("/")[2] === "all" ||
      collections.some((c) => c.handle === path.split("/")[2]) ? (
        <Collection handle={path.split("/")[2]} />
      ) : (
        <NotFound />
      );
  else if (path === "/pages/new-arrivals") content = <Collection newArrivals />;
  else if (path === "/search") content = <Collection search />;
  else if (path === "/cart")
    content = (
      <section className="cart-page">
        <h1>Your cart</h1>
        <CartContent />
      </section>
    );
  else if (path === "/checkout") content = <Checkout />;
  else if (path.startsWith("/account"))
    content = <Account ordersOnly={path === "/account/orders"} />;
  else if (
    ["/pages/about", "/pages/contact", "/policies/privacy-policy"].includes(
      path,
    )
  )
    content = <ContentPage page={path.split("/")[2]} />;
  else content = <NotFound />;
  return (
    <Store.Provider value={value}>
      <div className="shop-shell">
        <a className="shop-skip" href="#shop-main">
          Skip to content
        </a>
        {path !== "/checkout" && <Header light={!!product} />}
        <main id="shop-main">{content}</main>
        {path !== "/checkout" && <Footer />}
        <Modal
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          title="Your cart"
          kind="cart-drawer"
        >
          <CartContent />
        </Modal>
      </div>
    </Store.Provider>
  );
}
