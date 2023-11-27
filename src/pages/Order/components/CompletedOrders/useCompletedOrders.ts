import { Dayjs } from 'dayjs';
import { useCallback, useState } from 'react';

import { usePagination } from '../../../../components/Pagination/usePagination';
import { useListCompletedOrders } from '../../../../hooks/useListCompletedOrders';
import { useModal } from '../../../../hooks/useModal';
import { CompletedOrder } from '../../../../types/CompletedOrder';
import { formatDateWithAbbreviatedMonth } from '../../../../utils/formatDateWithAbbreviatedMonth';

export function useCompletedOrders() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [dates, setDates] = useState<{
    startDate: Dayjs | null;
    endDate: Dayjs | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const { page, handleChangePage } = usePagination();

  const {
    isVisible: isVisibleViewModal,
    data: completedOrderBeingView,
    handleOpenModal: handleOpenViewModal,
    handleCloseModal: handleCloseViewModal,
  } = useModal<CompletedOrder>();

  const {
    isVisible: isVisibleDeleteModal,
    data: completedOrderBeingDeleted,
    handleOpenModal: handleOpenDeleteModal,
    handleCloseModal: handleCloseDeleteModal,
  } = useModal<CompletedOrder>();

  const updateAndFilterWithNewDates = useCallback(
    ([start, end]: Array<Dayjs | null>) => {
      setDates((prevState) => {
        const isChangedStart = prevState.startDate === start;
        const isChangedEnd = prevState.endDate === end;

        if (!isChangedStart || !isChangedEnd) {
          handleChangePage(1);
          return {
            startDate: start,
            endDate: end,
          };
        }
        return prevState;
      });
    },
    [handleChangePage],
  );

  const {
    completedOrders,
    hasError,
    isLoading,
    totalCompletedOrderCount,
    refetch,
  } = useListCompletedOrders({
    page,
    dateStart: dates.startDate?.format('MM-DD-YYYY'),
    dateEnd: dates.endDate?.format('MM-DD-YYYY'),
  });

  function handleLoadCompletedOrders() {
    setIsFirstLoading(true);
    refetch();
  }

  let tableHeaderSubTitle = '';

  if (dates.startDate) {
    tableHeaderSubTitle = `Mostrando pedidos de ${formatDateWithAbbreviatedMonth(
      dates.startDate,
    )}`;

    if (dates.endDate) {
      tableHeaderSubTitle += ` a ${formatDateWithAbbreviatedMonth(
        dates.endDate,
      )}`;
    }
  }

  if (!isLoading && isFirstLoading) {
    setIsFirstLoading(false);
  }

  const isEmptyWithDate =
    (!!dates.startDate || !!dates.endDate) && completedOrders.length <= 0;

  const isEmptyList =
    completedOrders.length <= 0 &&
    !hasError &&
    isEmptyWithDate &&
    !(!!dates.startDate || !!dates.endDate);

  return {
    isFirstLoading,

    page,
    totalCount: totalCompletedOrderCount,
    handleChangePage,
    completedOrders,
    hasError,
    isLoading,
    isEmptyList,
    updateAndFilterWithNewDates,
    tableHeaderSubTitle,
    isEmptyWithDate,
    handleLoadCompletedOrders,
    isVisibleDeleteModal,
    completedOrderBeingDeleted,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isVisibleViewModal,
    completedOrderBeingView,
    handleOpenViewModal,
    handleCloseViewModal,
  };
}
