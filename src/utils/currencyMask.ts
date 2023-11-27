export function currencyMask(value: string | number) {
  let stringValue = typeof value === 'number' ? String(value) : value;

  stringValue = stringValue.replace(/\D/g, '');
  stringValue = stringValue.replace(/(\d)(\d{2})$/, '$1,$2');
  stringValue = stringValue.replace(/(?=(\d{3})+(\D))\B/g, '.');

  return !stringValue ? stringValue : `R$ ${stringValue}`;
}
