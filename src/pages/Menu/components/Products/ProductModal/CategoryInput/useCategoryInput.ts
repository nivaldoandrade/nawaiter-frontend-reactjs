import { InfiniteData } from '@tanstack/react-query';
import { useState } from 'react';

import { useInfiniteScrollCategories } from '../../../../../../hooks/useInfiniteScrollCategories';
import { queryClient } from '../../../../../../services/QueryClient';
import { ICategory } from '../../../../../../types/Category';

interface UseCategoryInputProps {
  category?: ICategory;
}

export function useCategoryInput({ category }: UseCategoryInputProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    ICategory | undefined | null
  >(category);

  const { listInnerRef, data, isLoading, isStale, onScroll, refetch } =
    useInfiniteScrollCategories({
      pageSize: 9,
      disableFetch: !!category,
    });

  function handleSelectedCategory(category: ICategory) {
    setSelectedCategory(category);
  }

  function handleShowCategories() {
    if (isStale) {
      queryClient.setQueryData<InfiniteData<ICategory[]>>(
        ['categories'],
        (data) => {
          if (!data) {
            return;
          }

          return {
            pages: data.pages.slice(0, 1),
            pageParams: data.pageParams.slice(0, 1),
          };
        },
      );
      refetch();
    }

    setSelectedCategory(null);
  }

  return {
    selectedCategory,
    listInnerRef,
    data,
    isLoading,
    onScroll,
    handleSelectedCategory,
    handleShowCategories,
  };
}
