import { useQuery } from '@tanstack/react-query';

import completedOrdersService from '../services/completedOrdersService';
import { CompletedOrderDetails } from '../types/CompletedOrder';
import { formatPrice } from '../utils/formartPrice';
import { formatDate } from '../utils/formatDate';

export function useShowCompletedOrder(id: string) {
  const { data, isFetching } = useQuery({
    queryKey: ['completedorder', id],
    queryFn: () => completedOrdersService.show(id),
    staleTime: 5000,
  });

  const completedOrder =
    data &&
    ({
      ...data,
      createdAtFormatted: formatDate(data.date),
      totalOrderPriceFormatted: formatPrice(data.totalPrice),
      items: data.items.map((item) => ({
        ...item,
        priceFormatted: formatPrice(item.price),
      })),
    } as CompletedOrderDetails);

  return {
    completedOrder,
    isLoadingCompletedOrder: isFetching,
  };
}
