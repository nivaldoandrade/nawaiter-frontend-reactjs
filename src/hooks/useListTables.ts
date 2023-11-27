import { useQuery } from '@tanstack/react-query';

import tablesService from '../services/tablesService';

export function useLisTables(page: number) {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['tables', page],
    queryFn: () => tablesService.list({ page }),
    staleTime: 5000,
    keepPreviousData: true,
  });

  return {
    tables: data?.tables ?? [],
    totalTableCount: data?.totalCount ?? 0,
    isLoading: isLoading || isFetching,
    hasError: isError,
    refetch,
  };
}
