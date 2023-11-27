import { EmptyList } from '../../../../components/EmptyList';
import { ErrorStatus } from '../../../../components/ErrorStatus';
import { Loader } from '../../../../components/Loader';
import { Pagination } from '../../../../components/Pagination';
import { TableHeader } from '../../../../components/Table/TableHeader';

import { DeleteCategory } from './DeleteCategory';
import { EditCategory } from './EditCategory';
import { ListCategories } from './ListCategories';
import { NewCategory } from './NewCategory';
import { useCategories } from './useCategories';

export function Categories() {
  const {
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
  } = useCategories();

  if (isFirstLoading) {
    return <Loader />;
  }

  return (
    <>
      <TableHeader
        title="Categorias"
        qtyItens={totalCategoryCount}
        onOpenModal={handleOpenNewOrEditModal}
      />

      {isEmptyList && (
        <EmptyList>
          Você ainda não tem nenhuma categoria cadastrada! <br />
          Clique no botão <strong>“Novo Categoria”</strong> à direita a cima
          para cadastrar o seu primeiro.
        </EmptyList>
      )}

      {hasError && (
        <ErrorStatus
          message="Ocorreu um erro ao obter as categorias!"
          onClick={handleLoadCategories}
        />
      )}

      {!hasError && !isEmptyList && (
        <>
          <ListCategories
            categories={categories}
            isLoading={isLoadingCategories}
            onOpenEditModal={handleOpenNewOrEditModal}
            onOpenDeleteModal={handleOpenDeletedModal}
          />

          <Pagination
            currentPage={page}
            totalCount={totalCategoryCount}
            onPageChange={handleChangePage}
          />

          {isVisibleNewOrEditModal && categoryBeingEdited && (
            <EditCategory
              category={categoryBeingEdited}
              onClose={handleCloseNewOrEditModal}
              onOpenDeleteModal={handleOpenDeletedModal}
            />
          )}

          {isVisibleDeleteModal && categoryBeingDeleted && (
            <DeleteCategory
              category={categoryBeingDeleted}
              onClose={handleCloseDeleteModal}
              onCloseEditModal={handleCloseNewOrEditModal}
            />
          )}
        </>
      )}

      {isVisibleNewOrEditModal && !categoryBeingEdited && (
        <NewCategory onClose={handleCloseNewOrEditModal} />
      )}
    </>
  );
}
