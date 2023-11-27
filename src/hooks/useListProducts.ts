import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import productsService from '../services/productsService';
import { IProduct } from '../types/Product';
import { baseImageURL } from '../utils/baseImageURL';
import { formatPrice } from '../utils/formartPrice';

export function useListProducts(page: number) {
  const { isFetching, isLoading, data, isError, refetch } = useQuery({
    queryKey: ['products', 1],
    queryFn: () => productsService.list({ page }),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const products: IProduct[] = useMemo(() => {
    if (data) {
      return data.products.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        srcImg: baseImageURL(product.imagePath),
      }));
    }

    return [];
  }, [data]);

  return {
    hasError: isError,
    products,
    totalProductCount: data?.totalCount ?? 0,
    isLoading: isLoading || isFetching,
    refetch,
  };
}
