import { useState } from 'react';

import { usePagination } from '../../../../components/Pagination/usePagination';
import { useListProducts } from '../../../../hooks/useListProducts';
import { useModal } from '../../../../hooks/useModal';
import { IProduct } from '../../../../types/Product';

export function useProducts() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const { page, handleChangePage } = usePagination();

  const { products, isLoading, hasError, totalProductCount, refetch } =
    useListProducts(page);

  const {
    isVisible: isVisibleNewOrEditModal,
    data: productBeingEdited,
    handleOpenModal: handleOpenNewOrEditModal,
    handleCloseModal: handleCloseNewOrEditModal,
  } = useModal<IProduct>();

  const {
    isVisible: isVisibleDeleteModal,
    data: productBeingDeleted,
    handleOpenModal: handleOpenDeleteModal,
    handleCloseModal: handleCloseDeleteModal,
  } = useModal<IProduct>();

  function handleLoadProducts() {
    setIsFirstLoading(true);
    refetch();
  }

  if (!isLoading && isFirstLoading) {
    setIsFirstLoading(false);
  }

  const isEmptyList = products && products.length <= 0 && !hasError;

  return {
    isFirstLoading,
    isLoading,
    products,
    page,
    totalProductCount,
    handleChangePage,
    hasError,
    productBeingEdited,
    isVisibleDeleteModal,
    productBeingDeleted,
    handleLoadProducts,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isEmptyList,
    isVisibleNewOrEditModal,
    handleOpenNewOrEditModal,
    handleCloseNewOrEditModal,
  };
}
