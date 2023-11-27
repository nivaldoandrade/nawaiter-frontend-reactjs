import { useQuery } from '@tanstack/react-query';

import ordersService from '../services/ordersService';
import { Order } from '../types/Order';
import { baseImageURL } from '../utils/baseImageURL';
import { formatPrice } from '../utils/formartPrice';

const Status = {
  WAITING: 'Fila de espera',
  IN_PRODUCTION: 'Em produção',
  DONE: 'Pronto',
  DELIVERED_TO_TABLE: 'Entregue',
  CANCELLED: 'Cancelado',
};

export function useShowOrder(id: string) {
  const {
    data,
    isFetching,
    isLoading,
    isError: hasError,
  } = useQuery({
    queryKey: ['order', id],
    queryFn: () => ordersService.show(id),
    staleTime: 5000,
  });

  let orderFormatted: Order | undefined;

  if (data) {
    const itensFormatted = data.items.map((item) => ({
      ...item,
      statusFormatted: Status[item.status],
      priceFormatted: formatPrice(item.product.price),
      srcImg: baseImageURL(item.product.imagePath),
    }));

    const totalPriceOrder = data.items.reduce(
      (acc, item) =>
        item.status === 'CANCELLED' ? acc : acc + item.totalPrice,
      0,
    );

    orderFormatted = {
      ...data,
      items: itensFormatted,
      totalPriceOrder,
      totalPriceOrderFormatted: formatPrice(totalPriceOrder),
    };
  }

  return {
    order: orderFormatted,
    isLoading: isLoading || isFetching,
    hasError,
  };
}
