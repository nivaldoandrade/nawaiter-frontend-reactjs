import { SpinnerScreen } from '../../../../../components/SpinnerScreen';
import { SubModal } from '../../../../../components/SubModal';
import { useShowCompletedOrder } from '../../../../../hooks/useShowCompletedOrder';
import { CompletedOrder } from '../../../../../types/CompletedOrder';

import { Container, Items, Status, Title } from './styles';

interface ViewCompletedOrderProps {
  order: string;
  onOpenModal: (completedOrder: CompletedOrder) => void;
  onClose: () => void;
}

export function ViewCompletedOrder({
  order,
  onOpenModal,
  onClose,
}: ViewCompletedOrderProps) {
  const { completedOrder, isLoadingCompletedOrder } =
    useShowCompletedOrder(order);

  return (
    <>
      <SpinnerScreen isLoading={isLoadingCompletedOrder} />
      {!isLoadingCompletedOrder && !!completedOrder && (
        <SubModal
          onClose={onClose}
          title={`${completedOrder.table} - ${completedOrder.createdAtFormatted}`}
          isLoading={false}
          leftButton={{
            title: 'Excluir Registro',
            onClick: () => onOpenModal(completedOrder),
          }}
        >
          <Container>
            <Status>
              <Title>Número da ordem</Title>
              <h6>{completedOrder.orderNumber}</h6>
            </Status>
            <Items>
              <Title>Itens</Title>
              <div className="items-content">
                {completedOrder.items.map(
                  ({ itemId, name, quantity, priceFormatted, observation }) => (
                    <div className="item" key={itemId}>
                      <span className="quantity">{quantity}x</span>
                      <div>
                        <h6>{name}</h6>
                        <span>{priceFormatted}</span>
                        <p>{observation && `OBS: ${observation}`}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
              <div className="total-content">
                <Title>Total</Title>
                <h6>{completedOrder.totalOrderPriceFormatted}</h6>
              </div>
            </Items>
          </Container>
        </SubModal>
      )}
    </>
  );
}
