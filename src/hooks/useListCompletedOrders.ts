import { useQuery } from '@tanstack/react-query';

import completedOrdersService from '../services/completedOrdersService';
import { formatPrice } from '../utils/formartPrice';
import { formatDate } from '../utils/formatDate';

interface UseListCompletedOrdersProps {
  page?: number;
  dateStart?: string;
  dateEnd?: string;
}

export function useListCompletedOrders({
  page,
  dateStart,
  dateEnd,
}: UseListCompletedOrdersProps) {
  const { data, isFetching, isLoading, isError, refetch } = useQuery({
    queryKey: ['completedorders', page, dateStart, dateEnd],
    queryFn: () => completedOrdersService.list({ page, dateStart, dateEnd }),
    staleTime: 5000,
  });

  const completedOrders = data?.completedOrders.map((order) => ({
    ...order,
    createdAtFormatted: formatDate(order.date),
    totalOrderPriceFormatted: formatPrice(order.totalPrice),
  }));

  return {
    completedOrders: completedOrders ?? [],
    hasError: isError,
    isLoading: isLoading || isFetching,
    totalCompletedOrderCount: data?.totalCount ?? 0,
    refetch,
  };
}
