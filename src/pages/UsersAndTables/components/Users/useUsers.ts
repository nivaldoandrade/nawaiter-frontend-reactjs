import { useState } from 'react';

import { usePagination } from '../../../../components/Pagination/usePagination';
import { useListUsers } from '../../../../hooks/useListUsers';
import { useModal } from '../../../../hooks/useModal';
import { User } from '../../../../types/User';

export function useUsers() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const {
    isVisible: isVisibleNewOrEditModal,
    data: userBeingEdited,
    handleOpenModal: handleOpenNewOrEditModal,
    handleCloseModal: handleCloseNewOrEditModal,
  } = useModal<User>();

  const {
    isVisible: isVisibleDeleteModal,
    data: userBeingDeleted,
    handleOpenModal: handleOpenDeleteModal,
    handleCloseModal: handleCloseDeleteModal,
  } = useModal<User>();

  const { page, handleChangePage } = usePagination();

  const { users, totalUserCount, isLoading, hasError, refetch } =
    useListUsers(page);

  function handleLoadhUsers() {
    setIsFirstLoading(true);
    refetch();
  }

  if (!isLoading && isFirstLoading) {
    setIsFirstLoading(false);
  }

  const isEmptyList = users.length <= 0 && !hasError;

  return {
    isFirstLoading,
    handleLoadhUsers,
    isEmptyList,
    totalUserCount,
    hasError,
    users,
    isLoading,
    handleChangePage,
    page,
    isVisibleNewOrEditModal,
    userBeingEdited,
    handleOpenNewOrEditModal,
    handleCloseNewOrEditModal,
    isVisibleDeleteModal,
    userBeingDeleted,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  };
}
