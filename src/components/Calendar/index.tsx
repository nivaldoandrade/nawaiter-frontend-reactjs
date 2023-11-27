import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useMemo, useState } from 'react';

import { getWeekDays } from '../../utils/getWeekDays';
import { ArrowIcon } from '../Icons/ArrowIcon';

import {
  CalendarContainer,
  Container,
  Header,
  NextMonthButton,
  PreviuosMonthButton,
  Title,
} from './styles';
import { WeekNumber } from './WeekNumber';

interface CalendarWeeks {
  week: number;
  days: dayjs.Dayjs[];
}

interface CalendarProps {
  onSelectedDates: ([start, end]: Array<Dayjs | null>) => void;
  startDate: Dayjs | null;
  endDate: Date | string | Dayjs | null;
}

export function CalendarComp({
  onSelectedDates,
  startDate,
  endDate,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() =>
    dayjs(startDate || new Date()).set('date', 1),
  );

  const weekDays = getWeekDays();

  const currentMonth = currentDate.format('MMMM');
  const currentYear = currentDate.format('YYYY');

  function handlePreviousMonth() {
    const previuosMonthDate = currentDate.subtract(1, 'month');

    setCurrentDate(previuosMonthDate);
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month');

    setCurrentDate(nextMonthDate);
  }

  const calendarWeeks = useMemo(() => {
    const daysInMonth = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => currentDate.set('date', i + 1));

    const firstWeekDay = currentDate.get('day');
    const lastWeekDay = currentDate.add(1, 'month').subtract(1, 'day');

    const lastDaysPreviousMonth = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => currentDate.subtract(i + 1, 'day'))
      .reverse();

    const firstDaysNextMonth = Array.from({
      length: 6 - lastWeekDay.get('day'),
    }).map((_, i) => lastWeekDay.add(i + 1, 'day'));

    const calendarDays = [
      ...lastDaysPreviousMonth,
      ...daysInMonth,
      ...firstDaysNextMonth,
    ];

    return calendarDays.reduce<CalendarWeeks[]>((weeks, _, i, original) => {
      if (i % 7 === 0) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        });
      }

      return weeks;
    }, []);
  }, [currentDate]);

  const handleSelectedDate = useCallback(
    (date: dayjs.Dayjs) => {
      const dateRangeIncomplete = !startDate || endDate;
      const isSameDayAsSelectedStartDate = date.isSame(startDate, 'day');
      const isDateBeforeStart = date.isBefore(startDate, 'day');

      if (dateRangeIncomplete) {
        onSelectedDates([date, null]);
      } else if (isSameDayAsSelectedStartDate) {
        onSelectedDates([null, null]);
      } else if (isDateBeforeStart) {
        onSelectedDates([date, null]);
      } else {
        onSelectedDates([startDate, date]);
      }
    },
    [onSelectedDates, endDate, startDate],
  );

  return (
    <Container>
      <Header>
        <PreviuosMonthButton
          onClick={handlePreviousMonth}
          title="Previous month"
        >
          <ArrowIcon />
        </PreviuosMonthButton>
        <Title>
          {currentMonth} <span>{currentYear}</span>
        </Title>
        <NextMonthButton onClick={handleNextMonth} title="Next month">
          <ArrowIcon />
        </NextMonthButton>
      </Header>
      <CalendarContainer>
        <thead>
          <tr>
            {weekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => (
            <tr key={week}>
              <WeekNumber
                onSelectedDate={handleSelectedDate}
                days={days}
                selectedStartDate={startDate ? dayjs(startDate) : null}
                selectedEndDate={endDate ? dayjs(endDate) : null}
              />
            </tr>
          ))}
        </tbody>
      </CalendarContainer>
    </Container>
  );
}
