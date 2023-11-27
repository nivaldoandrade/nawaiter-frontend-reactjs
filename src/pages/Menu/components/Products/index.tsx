import { EmptyList } from '../../../../components/EmptyList';
import { ErrorStatus } from '../../../../components/ErrorStatus';
import { Loader } from '../../../../components/Loader';
import { Pagination } from '../../../../components/Pagination';
import { TableHeader } from '../../../../components/Table/TableHeader';

import { DeleteProduct } from './DeleteProduct';
import { EditProduct } from './EditProduct';
import { ListProducts } from './ListProducts';
import { NewProduct } from './NewProduct';
import { useProducts } from './useProducts';

export function Products() {
  const {
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
  } = useProducts();

  if (isFirstLoading) {
    return <Loader />;
  }

  return (
    <>
      <TableHeader
        title="Produtos"
        qtyItens={totalProductCount}
        onOpenModal={handleOpenNewOrEditModal}
      />

      {isEmptyList && (
        <EmptyList>
          Você ainda não tem nenhuma produto cadastrado! <br />
          Clique no botão <strong>“Novo Produto”</strong> à direita a cima para
          cadastrar o seu primeiro.
        </EmptyList>
      )}

      {hasError && (
        <ErrorStatus
          message="Ocorreu um erro ao obter os produtos!"
          onClick={handleLoadProducts}
        />
      )}

      {!hasError && !isEmptyList && (
        <>
          <ListProducts
            products={products}
            isLoading={isLoading}
            handleEditProduct={handleOpenNewOrEditModal}
            handleOpenDeleteModal={handleOpenDeleteModal}
          />

          <Pagination
            totalCount={totalProductCount}
            currentPage={page}
            onPageChange={handleChangePage}
          />

          {productBeingEdited && isVisibleNewOrEditModal && (
            <EditProduct
              productId={productBeingEdited.id}
              onClose={handleCloseNewOrEditModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
            />
          )}

          {productBeingDeleted && isVisibleDeleteModal && (
            <DeleteProduct
              product={productBeingDeleted}
              onClose={handleCloseDeleteModal}
              onCloseProductModal={() =>
                isVisibleNewOrEditModal && handleCloseNewOrEditModal()
              }
            />
          )}
        </>
      )}

      {!productBeingEdited && isVisibleNewOrEditModal && (
        <NewProduct onClose={handleCloseNewOrEditModal} />
      )}
    </>
  );
}
