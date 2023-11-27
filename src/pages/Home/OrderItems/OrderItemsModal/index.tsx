import { SubModal } from '../../../../components/SubModal';
import { OrderItemDetails } from '../../../../types/OrderItem';

import { Container, Item, Status, Title, Observation } from './styles';
import { useOrderModal } from './useOrderModal';

interface OrderModalProps {
  order: OrderItemDetails;
  onClose: () => void;
}

export function OrderItemModal({ order, onClose }: OrderModalProps) {
  const { isLoading, handleChangeStatusItem, selectedStatusInfo } =
    useOrderModal({
      order,
      onClose,
    });

  return (
    <SubModal
      onClose={onClose}
      title={`${order.table}`}
      isLoading={isLoading}
      leftButton={{
        title: 'Cancelar Pedido',
        onClick: () => '',
      }}
      rightButton={{
        title: selectedStatusInfo.buttonTitle,
        onClick: handleChangeStatusItem,
      }}
    >
      <Container>
        <Status>
          <Title>Status do Pedido</Title>
          <div className="status-content">
            <i>{selectedStatusInfo.icon}</i>
            <h6>{selectedStatusInfo.title}</h6>
          </div>
        </Status>
        <Item>
          <Title>Item</Title>
          <div>
            <span className="quantity">{order.quantity}x</span>
            <h6>{order.product.name}</h6>
          </div>
        </Item>
        {order.observation && (
          <Observation className="observation">
            <Title>Observação</Title>
            <h6>{order.observation}</h6>
          </Observation>
        )}
      </Container>
    </SubModal>
  );
}
