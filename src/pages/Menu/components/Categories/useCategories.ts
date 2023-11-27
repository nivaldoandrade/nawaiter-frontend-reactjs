import { useState } from 'react';

import { usePagination } from '../../../../components/Pagination/usePagination';
import { useListCategories } from '../../../../hooks/useListCategories';
import { useModal } from '../../../../hooks/useModal';
import { ICategory } from '../../../../types/Category';

export function useCategories() {
  const [isFirstLoading, setFirstLoading] = useState(true);

  const {
    isVisible: isVisibleNewOrEditModal,
    data: categoryBeingEdited,
    handleOpenModal: handleOpenNewOrEditModal,
    handleCloseModal: handleCloseNewOrEditModal,
  } = useModal<ICategory>();

  const {
    isVisible: isVisibleDeleteModal,
    data: categoryBeingDeleted,
    handleOpenModal: handleOpenDeletedModal,
    handleCloseModal: handleCloseDeleteModal,
  } = useModal<ICategory>();

  const { page, handleChangePage } = usePagination();

  const {
    categories,
    isLoadingCategories,
    totalCategoryCount,
    hasError,
    refetch,
  } = useListCategories(page);

  function handleLoadCategories() {
    setFirstLoading(true);
    refetch();
  }

  if (!isLoadingCategories && isFirstLoading) {
    setFirstLoading(false);
  }

  const isEmptyList = categories && categories.length <= 0 && !hasError;

  return {
    isFirstLoading,
    isLoadingCategories,
    categories,
    page,
    totalCategoryCount,
    handleChangePage,
    handleLoadCategories,
    isEmptyList,
    hasError,
    isVisibleNewOrEditModal,
    categoryBeingEdited,
    handleOpenNewOrEditModal,
    handleCloseNewOrEditModal,
    isVisibleDeleteModal,
    categoryBeingDeleted,
    handleOpenDeletedModal,
    handleCloseDeleteModal,
  };
}
