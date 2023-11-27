import { Dayjs } from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseListCompletedOrdersProps {
  onUpdateAndFilterWithNewDates: ([start, end]: Array<Dayjs | null>) => void;
}

export function useListCompletedOrders({
  onUpdateAndFilterWithNewDates,
}: UseListCompletedOrdersProps) {
  const [selectedDates, setSelectedDates] = useState<{
    startDate: Dayjs | null;
    endDate: Dayjs | null;
  }>({
    startDate: null,
    endDate: null,
  });
  const [isVisibleCalendar, setVisibleCalendar] = useState(false);

  const containerRef = useRef({} as HTMLDivElement);
  const calendarButtonRef = useRef({} as HTMLButtonElement);

  const handleDateChangeAndRefresh = useCallback(() => {
    const { startDate: start, endDate: end } = selectedDates;

    onUpdateAndFilterWithNewDates([start, end]);
  }, [onUpdateAndFilterWithNewDates, selectedDates]);

  function handleSelectedDates([start, end]: Array<Dayjs | null>) {
    setSelectedDates({
      startDate: start,
      endDate: end,
    });
  }

  const handleToggleCalendar = useCallback(() => {
    setVisibleCalendar((state) => !state);
  }, []);

  useEffect(() => {
    const containerRefElement = containerRef.current;
    const calendarButtonRefElement = calendarButtonRef.current;

    function handleCloseCalendar(event: MouseEvent) {
      if (
        !containerRefElement.contains(event.target as Node) &&
        !calendarButtonRefElement.contains(event.target as Node)
      ) {
        handleDateChangeAndRefresh();

        handleToggleCalendar();
      }
    }

    if (containerRefElement && isVisibleCalendar) {
      document.addEventListener('click', handleCloseCalendar);
    }

    return () => {
      document.removeEventListener('click', handleCloseCalendar);
    };
  }, [isVisibleCalendar, handleToggleCalendar, handleDateChangeAndRefresh]);

  return {
    calendarButtonRef,
    handleToggleCalendar,
    isVisibleCalendar,
    containerRef,
    handleSelectedDates,
    selectedDates,
  };
}
