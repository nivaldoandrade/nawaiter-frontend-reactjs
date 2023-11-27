import { useQuery } from '@tanstack/react-query';

import productsService from '../services/productsService';
import { IProduct } from '../types/Product';
import { baseImageURL } from '../utils/baseImageURL';
import { formatPrice } from '../utils/formartPrice';

export function useShowProduct(productId: string) {
  const { data, isFetching } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => productsService.show(productId),
    staleTime: 5000,
  });

  const product =
    data &&
    ({
      ...data,
      priceFormatted: formatPrice(data.price),
      srcImg: baseImageURL(data.imagePath),
    } as IProduct);

  return {
    product,
    isFetching,
  };
}
