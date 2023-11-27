import dayjs from 'dayjs';
import { memo, useCallback } from 'react';

import { Td } from './styles';

interface WeekNumberProps {
  onSelectedDate: (date: dayjs.Dayjs) => void;
  days: dayjs.Dayjs[];
  selectedStartDate: dayjs.Dayjs | null;
  selectedEndDate: dayjs.Dayjs | null;
}

function WeekNumberWrapper({
  onSelectedDate,
  days,
  selectedStartDate,
  selectedEndDate,
}: WeekNumberProps) {
  const isDateInRange = useCallback(
    (date: dayjs.Dayjs) => {
      if (!selectedStartDate || !selectedEndDate) {
        return false;
      }

      return (
        date.isAfter(selectedStartDate.startOf('day')) &&
        date.isBefore(selectedEndDate.endOf('day'))
      );
    },
    [selectedStartDate, selectedEndDate],
  );

  const isFirstSelectedDate = useCallback(
    (date: dayjs.Dayjs) => {
      if (!selectedStartDate) {
        return false;
      }
      return date.isSame(selectedStartDate, 'day');
    },
    [selectedStartDate],
  );

  const isLastSeletectedDate = useCallback(
    (date: dayjs.Dayjs) => {
      if (!selectedEndDate) {
        return false;
      }

      return date.isSame(selectedEndDate, 'day');
    },
    [selectedEndDate],
  );

  const isCurrentDate = useCallback(
    (date: dayjs.Dayjs) => date.isSame(new Date(), 'day'),
    [],
  );

  return (
    <>
      {days.map((day) => (
        <Td
          key={day.toString()}
          isDateinRange={isDateInRange(day)}
          isSeletectFirstAndLastDate={
            isFirstSelectedDate(day) && !!selectedStartDate && !!selectedEndDate
          }
          isFirstSelectedDate={isFirstSelectedDate(day)}
          isLastSeletectedDate={isLastSeletectedDate(day)}
          isCurrentDate={isCurrentDate(day)}
        >
          <button type="button" onClick={() => onSelectedDate(day)}>
            {day.get('date')}
          </button>
        </Td>
      ))}
    </>
  );
}

export const WeekNumber = memo(WeekNumberWrapper);
