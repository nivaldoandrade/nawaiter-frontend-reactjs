import { EmptyList } from '../../../../components/EmptyList';
import { ErrorStatus } from '../../../../components/ErrorStatus';
import { Loader } from '../../../../components/Loader';
import { Pagination } from '../../../../components/Pagination';
import { TableHeader } from '../../../../components/Table/TableHeader';

import { ListOrders } from './ListOrders';
import { useCurrentOrders } from './useCurrentOrders';
import { ViewOrder } from './ViewOrder';

export function CurrentOrders() {
  const {
    orders,
    isEmptyList,
    hasError,
    isLoading,
    isFirstLoading,
    isVisibleViewModal,
    orderBeingView,
    handleOpenViewModal,
    handleCloseViewModal,
    totalCount,
    handleLoadOrders,
    page,
    handleChangePage,
  } = useCurrentOrders();

  return (
    <>
      {isFirstLoading ? (
        <Loader />
      ) : (
        <>
          <TableHeader title="Pedidos em Execução" qtyItens={totalCount} />

          {isEmptyList && (
            <EmptyList>Você ainda não tem nenhuma pedido!</EmptyList>
          )}

          {hasError && (
            <ErrorStatus
              message="Ocorreu um erro ao obter os pedidos!"
              onClick={handleLoadOrders}
            />
          )}

          {!isEmptyList && !hasError && (
            <>
              <ListOrders
                orders={orders}
                isLoading={isLoading}
                onOpenViewModal={handleOpenViewModal}
              />

              {isVisibleViewModal && orderBeingView && (
                <ViewOrder
                  orderId={orderBeingView.id}
                  onClose={handleCloseViewModal}
                />
              )}

              <Pagination
                totalCount={totalCount}
                currentPage={page}
                onPageChange={handleChangePage}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
