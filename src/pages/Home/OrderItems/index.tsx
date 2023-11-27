import { OrderItemStatus } from '../../../types/OrderItem';

import { OrderItemsBoard } from './OrderItemsBoard';
import { OrderItemModal } from './OrderItemsModal';
import { Container } from './styles';
import { useOrders } from './useOrders';

interface OrdersProps {
  orderItems: OrderItemStatus;
  refetch: () => void;
}

export function Orders({ orderItems, refetch }: OrdersProps) {
  const {
    isVisibleViewModal,
    orderBeingView,
    handleOpenViewModal,
    handleCloseViewModal,
  } = useOrders({ refetch });

  return (
    <Container>
      <OrderItemsBoard
        icon="🕑"
        title="Fila de espera"
        orders={orderItems.WAITING}
        handleOpenOrderModal={handleOpenViewModal}
      />
      <OrderItemsBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={orderItems.IN_PRODUCTION}
        handleOpenOrderModal={handleOpenViewModal}
      />
      <OrderItemsBoard
        icon="✅"
        title="Pronto!"
        orders={orderItems.DONE}
        handleOpenOrderModal={handleOpenViewModal}
      />

      {isVisibleViewModal && orderBeingView && (
        <OrderItemModal order={orderBeingView} onClose={handleCloseViewModal} />
      )}
    </Container>
  );
}
