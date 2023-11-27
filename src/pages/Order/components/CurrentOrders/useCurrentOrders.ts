import { useState } from 'react';

import { usePagination } from '../../../../components/Pagination/usePagination';
import { useListOrder } from '../../../../hooks/useListOrders';
import { useModal } from '../../../../hooks/useModal';
import { OrderList } from '../../../../types/Order';

export function useCurrentOrders() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const { page, handleChangePage } = usePagination();

  const {
    isVisible: isVisibleViewModal,
    data: orderBeingView,
    handleOpenModal: handleOpenViewModal,
    handleCloseModal: handleCloseViewModal,
  } = useModal<OrderList>();

  const { orders, totalOrderCount, isLoading, hasError, refetch } =
    useListOrder({
      page: 1,
    });

  function handleLoadOrders() {
    setIsFirstLoading(true);
    refetch();
  }

  if (!isLoading && isFirstLoading) {
    setIsFirstLoading(false);
  }

  const isEmptyList = orders.length <= 0 && !hasError;

  return {
    orders,
    isEmptyList,
    hasError,
    isLoading,
    isFirstLoading,
    isVisibleViewModal,
    orderBeingView,
    handleOpenViewModal,
    handleCloseViewModal,
    totalCount: totalOrderCount,
    handleLoadOrders,
    page,
    handleChangePage,
  };
}
