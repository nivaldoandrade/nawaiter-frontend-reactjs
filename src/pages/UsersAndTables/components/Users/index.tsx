import { EmptyList } from '../../../../components/EmptyList';
import { ErrorStatus } from '../../../../components/ErrorStatus';
import { Loader } from '../../../../components/Loader';
import { Pagination } from '../../../../components/Pagination';
import { TableHeader } from '../../../../components/Table/TableHeader';

import { DeleteUser } from './DeleteUser';
import { EditUser } from './EditUser';
import { ListUsers } from './ListUsers';
import { NewUser } from './NewUser';
import { useUsers } from './useUsers';

export function Users() {
  const {
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
  } = useUsers();

  return (
    <>
      {isFirstLoading ? (
        <Loader />
      ) : (
        <>
          <TableHeader
            title="Usuários"
            qtyItens={totalUserCount}
            onOpenModal={handleOpenNewOrEditModal}
          />

          {isEmptyList && (
            <EmptyList>
              Você ainda não tem nenhuma usuário cadastrado! <br />
              Clique no botão <strong>“Novo Usuário”</strong> à direita a cima
              para cadastrar o seu primeiro.
            </EmptyList>
          )}

          {hasError && (
            <ErrorStatus
              message="Ocorreu um erro ao obter os usuários!"
              onClick={handleLoadhUsers}
            />
          )}

          {!hasError && !isEmptyList && (
            <>
              <ListUsers
                users={users}
                isLoading={isLoading}
                onOpenEditModal={handleOpenNewOrEditModal}
                onOpenDeleteModal={handleOpenDeleteModal}
              />

              <Pagination
                currentPage={page}
                totalCount={totalUserCount}
                onPageChange={handleChangePage}
              />

              {isVisibleNewOrEditModal && userBeingEdited && (
                <EditUser
                  user={userBeingEdited}
                  onClose={handleCloseNewOrEditModal}
                />
              )}

              {isVisibleDeleteModal && userBeingDeleted && (
                <DeleteUser
                  onClose={handleCloseDeleteModal}
                  user={userBeingDeleted}
                />
              )}
            </>
          )}

          {isVisibleNewOrEditModal && !userBeingEdited && (
            <NewUser onClose={handleCloseNewOrEditModal} />
          )}
        </>
      )}
    </>
  );
}
