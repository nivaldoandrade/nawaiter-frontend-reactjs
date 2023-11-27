import { EmptyList } from '../../../../components/EmptyList';
import { ErrorStatus } from '../../../../components/ErrorStatus';
import { Loader } from '../../../../components/Loader';
import { Pagination } from '../../../../components/Pagination';
import { TableHeader } from '../../../../components/Table/TableHeader';
import { CompletedOrder } from '../../../../types/CompletedOrder';

import { DeleteCompletedOrder } from './DeleteCompletedOrder';
import { ListCompletedOrders } from './ListCompletedOrders';
import { useCompletedOrders } from './useCompletedOrders';
import { ViewCompletedOrder } from './ViewCompletedOrder';

export interface SeletectCompletedOrder {
  order: CompletedOrder;
  action: Array<'view' | 'delete'>;
}

export interface CalendarRef {
  current: {
    firstDate: Date | null;
    lastDate: Date | null;
  };
}

export function CompletedOrders() {
  const {
    isFirstLoading,
    page,
    totalCount,
    handleChangePage,
    completedOrders,
    hasError,
    isLoading,
    updateAndFilterWithNewDates,
    tableHeaderSubTitle,
    isEmptyWithDate,
    isEmptyList,
    handleLoadCompletedOrders,
    isVisibleDeleteModal,
    completedOrderBeingDeleted,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isVisibleViewModal,
    completedOrderBeingView,
    handleOpenViewModal,
    handleCloseViewModal,
  } = useCompletedOrders();

  return (
    <>
      {isFirstLoading ? (
        <Loader />
      ) : (
        <>
          {isEmptyList && (
            <EmptyList>Você ainda não tem nenhum registro de pedido!</EmptyList>
          )}

          {hasError && (
            <ErrorStatus
              message="Ocorreu um erro ao obter os pedidos!"
              onClick={handleLoadCompletedOrders}
            />
          )}

          {!hasError && !isEmptyList && (
            <>
              <TableHeader
                title="Histórico de Pedidos"
                subTitle={tableHeaderSubTitle}
                qtyItens={totalCount}
              />

              <ListCompletedOrders
                isLoading={isLoading}
                completedOrders={completedOrders}
                onOpenViewModal={handleOpenViewModal}
                onOpenDeleteModal={handleOpenDeleteModal}
                onUpdateAndFilterWithNewDates={updateAndFilterWithNewDates}
                isEmptyWithDate={isEmptyWithDate}
              />

              <Pagination
                currentPage={page}
                totalCount={totalCount}
                onPageChange={handleChangePage}
              />

              {isVisibleViewModal && completedOrderBeingView && (
                <ViewCompletedOrder
                  order={completedOrderBeingView.id}
                  onOpenModal={handleOpenDeleteModal}
                  onClose={handleCloseViewModal}
                />
              )}

              {isVisibleDeleteModal && completedOrderBeingDeleted && (
                <DeleteCompletedOrder
                  order={completedOrderBeingDeleted}
                  onClose={handleCloseDeleteModal}
                  onCloseViewModal={handleCloseViewModal}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
