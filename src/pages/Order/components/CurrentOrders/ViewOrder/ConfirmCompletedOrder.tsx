import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { SubModal } from '../../../../../components/SubModal';
import errorsMessagesCompletedOrders from '../../../../../constants/errorsMessagesCompletedOrders';
import completedOrdersService from '../../../../../services/completedOrdersService';
import { queryClient } from '../../../../../services/QueryClient';
import { Order } from '../../../../../types/Order';
import { toast } from '../../../../../utils/toast';

interface ConfirmCompletedOrderProps {
  order: Order;
  onClose: () => void;
  onCloseViewModal: () => void;
}

export function ConfirmCompletedOrder({
  order,
  onClose,
  onCloseViewModal,
}: ConfirmCompletedOrderProps) {
  const { mutateAsync, isLoading } = useMutation(
    completedOrdersService.create,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['orders']);
        queryClient.invalidateQueries(['completedorders']);
      },
    },
  );

  async function handleCompleteOrder() {
    try {
      await mutateAsync(order.id);

      onClose();
      onCloseViewModal();
    } catch (error) {
      if (!isAxiosError(error)) {
        return;
      }

      const message =
        errorsMessagesCompletedOrders[error.response?.data.message];

      toast({
        type: 'DANGER',
        title: message,
      });
    }
  }
  return (
    <SubModal
      isLoading={isLoading}
      title="Finalizar Pedido"
      onClose={onClose}
      question="Tem certeza que deseja finalizar o pedido de número?"
      leftButton={{
        title: 'Manter pedido',
        onClick: onClose,
      }}
      rightButton={{
        title: 'Finalizar pedido',
        onClick: handleCompleteOrder,
      }}
    >
      <h6>{order.orderNumber}</h6>
    </SubModal>
  );
}
