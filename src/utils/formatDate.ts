/**
 * Formats a date string into a localized date format.
 * @param date - The date string to be formatted.
 * @param withHours - Optional parameter to include the hours in the formatted date. Default is `false`.
 * @returns The formatted date string. EX: '30/05/2023' or '30/05/2023 - 11:01:10'
 */
export function formatDate(date: string, withHours = false): string {
  const d = new Date(date);

  const formattedDate = d.toLocaleDateString('pt-BR');

  if (withHours) {
    const formattedTimeWithHours = d
      .toLocaleString('pt-BR', {
        hour12: false,
      })
      .replace(',', ' -');

    return formattedTimeWithHours;
  }

  return formattedDate;
}
