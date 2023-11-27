import { SpinnerScreen } from '../../../../../components/SpinnerScreen';
import { SubModal } from '../../../../../components/SubModal';
import { useModal } from '../../../../../hooks/useModal';
import { useShowOrder } from '../../../../../hooks/useShowOrder';
import { Order as IOrder } from '../../../../../types/Order';

import { ConfirmCompletedOrder } from './ConfirmCompletedOrder';
import { Container, Items, Order, Title } from './styles';

interface ViewOrderProps {
  orderId: string;
  onClose: () => void;
}

export function ViewOrder({ orderId, onClose }: ViewOrderProps) {
  const {
    isVisible,
    data: orderBeingCompleted,
    handleOpenModal,
    handleCloseModal,
  } = useModal<IOrder>();

  const { order, isLoading } = useShowOrder(orderId);

  return (
    <>
      <SpinnerScreen isLoading={isLoading} />
      {!isLoading && order && (
        <>
          <SubModal
            title={order.table.name}
            onClose={onClose}
            rightButton={{
              title: 'Finalizar pedido',
              onClick: () => handleOpenModal(order),
            }}
          >
            <Container>
              <Order>
                <Title>Número da ordem</Title>
                <h6>{order.orderNumber}</h6>
              </Order>
              <Items>
                <Title>Itens</Title>
                <div className="items-content">
                  {order.items.map((orderItem) => (
                    <div className="item" key={orderItem.id}>
                      <img
                        src={orderItem.srcImg}
                        alt={orderItem.product.name}
                      />
                      <span className="quantity">{orderItem.quantity}x</span>
                      <div>
                        <h6>{orderItem.product.name}</h6>
                        <span>{orderItem.priceFormatted}</span>
                        <p>
                          {orderItem.observation &&
                            `OBS: ${orderItem.observation}`}
                        </p>
                      </div>
                      <span className="status">
                        {orderItem.statusFormatted}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="total-content">
                  <Title>Total</Title>
                  <h6>{order.totalPriceOrderFormatted}</h6>
                </div>
              </Items>
            </Container>
          </SubModal>

          {isVisible && orderBeingCompleted && (
            <ConfirmCompletedOrder
              order={order}
              onClose={handleCloseModal}
              onCloseViewModal={onClose}
            />
          )}
        </>
      )}
    </>
  );
}
