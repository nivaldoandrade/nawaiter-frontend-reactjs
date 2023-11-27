import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useRef } from 'react';

import categoriesService from '../services/categoriesService';

interface useInfiniteScrollCategoriesProps {
  pageSize?: number;
  disableFetch?: boolean;
}

export function useInfiniteScrollCategories({
  pageSize,
  disableFetch,
}: useInfiniteScrollCategoriesProps) {
  const LIMIT = pageSize ?? 10;
  const listInnerRef = useRef({} as HTMLDivElement);

  const {
    data,
    isFetching,
    isStale,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['categories'],
    async ({ pageParam = 1 }) => {
      const data = await categoriesService.list({
        page: pageParam,
        limit: LIMIT,
      });

      return data.categories;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === LIMIT ? allPages.length + 1 : undefined;

        return nextPage;
      },
      staleTime: 5000,
      enabled: !disableFetch ?? true,
    },
  );

  const onScroll = useCallback(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (
        scrollTop + clientHeight >= scrollHeight - 50 &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage, isFetchingNextPage]);

  return {
    listInnerRef,
    data,
    isLoading: isFetching,
    isStale,
    refetch,
    onScroll,
  };
}
