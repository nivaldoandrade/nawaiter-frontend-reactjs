import { useQuery } from '@tanstack/react-query';

import categoriesService from '../services/categoriesService';

export function useListCategories(page?: number, limit?: number) {
  const { isLoading, isFetching, data, refetch, isError } = useQuery({
    queryKey: ['categories', page],
    queryFn: () => categoriesService.list({ page, limit }),
    keepPreviousData: true,
    staleTime: 5000,
  });

  return {
    isLoadingCategories: isLoading || isFetching,
    categories: data ? data.categories : [],
    totalCategoryCount: data ? data.totalCount : 0,
    refetch,
    hasError: isError,
  };
}
