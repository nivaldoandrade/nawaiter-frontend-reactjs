/**
 * Formats a date object into a string with abbreviated month format.
 * @param date - The date object to be formatted.
 * @returns The formatted date string with abbreviated month. EX: '20 de dez'
 */

import { Dayjs } from 'dayjs';

export function formatDateWithAbbreviatedMonth(date: Dayjs): string {
  return date.format('DD [de] MMM');
}
