export function formatCurrencyString(value: string) {
  return value
    .replace(/[^\d,]+/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
}
