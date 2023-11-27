import { useQuery } from '@tanstack/react-query';

import usersService from '../services/usersService';

export function useListUsers(page: number) {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['users', page],
    queryFn: () => usersService.list({ page }),
    staleTime: 5000,
    keepPreviousData: true,
  });

  return {
    users: data?.users ?? [],
    totalUserCount: data?.totalCount ?? 0,
    isLoading: isLoading || isFetching,
    hasError: isError,
    refetch,
  };
}
