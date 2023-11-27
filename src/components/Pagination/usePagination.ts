import { useCallback, useState } from 'react';

export function usePagination(
  initialPage?: number,
  initialTotalCount?: number,
) {
  const [page, setPage] = useState(initialPage ?? 1);
  const [totalCount, setTotalCount] = useState(initialTotalCount ?? 0);

  const handleChangePage = useCallback((pageChanged: number) => {
    setPage(pageChanged);
  }, []);

  const decrementTotalCount = useCallback(() => {
    setTotalCount((state) => state - 1);
  }, []);

  const changeToPreviousPageWhenDeleteLastCategory = useCallback(() => {
    setTotalCount((state) => state - 1);
    setPage((state) => state - 1);
  }, []);

  return {
    page,
    totalCount,
    setTotalCount,
    handleChangePage,
    changeToPreviousPageWhenDeleteLastCategory,
    decrementTotalCount,
  };
}
