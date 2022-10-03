export function transformCurrency(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
