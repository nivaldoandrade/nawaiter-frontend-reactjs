import { EmptyList } from '../../../../components/EmptyList';
import { ErrorStatus } from '../../../../components/ErrorStatus';
import { Loader } from '../../../../components/Loader';
import { Pagination } from '../../../../components/Pagination';
import { TableHeader } from '../../../../components/Table/TableHeader';

import { DeleteTable } from './DeleteTable';
import { EditTable } from './EditTable';
import { ListTables } from './ListTables';
import { NewTable } from './NewTable';
import { useTables } from './useTables';

export function Tables() {
  const {
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
  } = useTables();

  return (
    <>
      {isFirstLoading ? (
        <Loader />
      ) : (
        <>
          <TableHeader
            title="Mesas"
            qtyItens={totalTableCount}
            onOpenModal={handleOpenNewOrEditModal}
          />

          {isEmptyList && (
            <EmptyList>
              Você ainda não tem nenhuma mesa cadastrado! <br />
              Clique no botão <strong>“Nova Mesa”</strong> à direita a cima para
              cadastrar o seu primeiro.
            </EmptyList>
          )}

          {hasError && (
            <ErrorStatus
              message="Ocorreu um erro ao obter as mesas!"
              onClick={handleLoadTables}
            />
          )}

          {!hasError && !isEmptyList && (
            <>
              <ListTables
                tables={tables}
                isLoading={isLoading}
                onOpenEditModal={handleOpenNewOrEditModal}
                onOpenDeleteModal={handleOpenDeleteModal}
              />

              <Pagination
                currentPage={page}
                totalCount={totalTableCount}
                onPageChange={handleChangePage}
              />

              {isVisibleNewOrEditModal && tableBeingEdited && (
                <EditTable
                  table={tableBeingEdited}
                  onClose={handleCloseNewOrEditModal}
                />
              )}

              {isVisibleDeleteModal && tableBeingDeleted && (
                <DeleteTable
                  onClose={handleCloseDeleteModal}
                  table={tableBeingDeleted}
                />
              )}
            </>
          )}

          {isVisibleNewOrEditModal && !tableBeingEdited && (
            <NewTable onClose={handleCloseNewOrEditModal} />
          )}
        </>
      )}
    </>
  );
}
