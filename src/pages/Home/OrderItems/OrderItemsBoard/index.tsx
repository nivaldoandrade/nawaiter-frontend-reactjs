import { OrderItemDetails } from '../../../../types/OrderItem';

import { Board } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: OrderItemDetails[];
  handleOpenOrderModal: (item: OrderItemDetails) => void;
}

export function OrderItemsBoard({
  icon,
  title,
  orders,
  handleOpenOrderModal,
}: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <i>{icon}</i>
        <strong>{title}</strong>
        <span>{`( ${orders.length} )`}</span>
      </header>
      {orders.length > 0 && (
        <main>
          {orders.map((order) => (
            <button
              key={order.id}
              type="button"
              onClick={() => handleOpenOrderModal(order)}
            >
              <strong>{order.table}</strong>
              <span>{`${order.quantity}x ${order.product.name}`}</span>
              <p>{order.observation && `OBS: ${order.observation}`}</p>
            </button>
          ))}
        </main>
      )}
    </Board>
  );
}
