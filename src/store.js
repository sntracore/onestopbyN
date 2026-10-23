import catalog from "./catalog.json";
export { catalog };
export const getProduct = (handle) =>
  catalog.find((product) => product.handle === handle);
export const available = (product) =>
  product.variants.some((variant) => variant.available);
export const price = (product) =>
  Math.min(...product.variants.map((variant) => Number(variant.price)));
export const money = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(value);
export function readSaved(key, fallback) {
  try {
    return (
      JSON.parse(localStorage.getItem("snug-prototype:" + key)) ?? fallback
    );
  } catch {
    return fallback;
  }
}
export function save(key, value) {
  try {
    localStorage.setItem("snug-prototype:" + key, JSON.stringify(value));
  } catch {
    /* Browsing still works with storage disabled. */
  }
}
export function cartItems(cart) {
  if (!Array.isArray(cart)) return [];
  return cart.flatMap((item) => {
    const product = getProduct(item.handle);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    if (!product || !variant) return [];
    return [
      {
        ...item,
        product,
        variant,
        quantity: Math.max(1, Math.min(99, Number(item.quantity) || 1)),
      },
    ];
  });
}
export const subtotal = (items) =>
  items.reduce(
    (total, item) => total + Number(item.variant.price) * item.quantity,
    0,
  );
