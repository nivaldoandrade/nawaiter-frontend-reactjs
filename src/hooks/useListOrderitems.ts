import { useQuery } from '@tanstack/react-query';

import orderItemsService from '../services/orderItemsService';
import { OrderItemStatus } from '../types/OrderItem';

export function useListOrderItems() {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['orderitems'],
    queryFn: () => orderItemsService.list(),
    staleTime: 5000,
  });

  return {
    orderItems: data || ({} as OrderItemStatus),
    isLoading,
    isFetching,
    refetch,
  };
}
