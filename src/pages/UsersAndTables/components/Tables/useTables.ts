import { useState } from 'react';

import { usePagination } from '../../../../components/Pagination/usePagination';
import { useLisTables } from '../../../../hooks/useListTables';
import { useModal } from '../../../../hooks/useModal';
import { ITable } from '../../../../types/Table';

export function useTables() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const {
    isVisible: isVisibleNewOrEditModal,
    data: tableBeingEdited,
    handleOpenModal: handleOpenNewOrEditModal,
    handleCloseModal: handleCloseNewOrEditModal,
  } = useModal<ITable>();

  const {
    isVisible: isVisibleDeleteModal,
    data: tableBeingDeleted,
    handleOpenModal: handleOpenDeleteModal,
    handleCloseModal: handleCloseDeleteModal,
  } = useModal<ITable>();

  const { page, handleChangePage } = usePagination();

  const { tables, totalTableCount, isLoading, hasError, refetch } =
    useLisTables(page);

  function handleLoadTables() {
    setIsFirstLoading(true);
    refetch();
  }

  if (!isLoading && isFirstLoading) {
    setIsFirstLoading(false);
  }

  const isEmptyList = tables.length <= 0 && !hasError;

  return {
    isFirstLoading,
    tables,
    totalTableCount,
    isLoading,
    handleLoadTables,
    isEmptyList,
    hasError,
    handleChangePage,
    page,
    isVisibleNewOrEditModal,
    tableBeingEdited,
    handleOpenNewOrEditModal,
    handleCloseNewOrEditModal,
    isVisibleDeleteModal,
    tableBeingDeleted,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  };
}
