/**
 * Retrieves an array of abbreviated week day names in Portuguese.
 * @returns An array of abbreviated week day names.
 */

export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' });

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekData) => weekData.substring(0, 3).toUpperCase());
}
