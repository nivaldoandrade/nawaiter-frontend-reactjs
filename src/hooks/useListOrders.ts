import { useQuery } from '@tanstack/react-query';

import ordersService from '../services/ordersService';

interface UseListOrdersProps {
  page?: number;
}

export function useListOrder({ page }: UseListOrdersProps) {
  const {
    data,
    isFetching,
    isLoading,
    isError: hasError,
    refetch,
  } = useQuery({
    queryKey: ['orders', page],
    queryFn: () => ordersService.list({ page }),
  });

  return {
    isLoading: isFetching || isLoading,
    orders: data?.orders ?? [],
    totalOrderCount: data?.totalCount ?? 0,
    hasError,
    refetch,
  };
}
