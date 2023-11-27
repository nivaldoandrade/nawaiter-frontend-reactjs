import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import errorMessagesOrders from '../../../../constants/errorsMessagesOrders';
import orderItemsService from '../../../../services/orderItemsService';
import { OrderItemDetails } from '../../../../types/OrderItem';
import { toast } from '../../../../utils/toast';

const statusOrder = {
  WAITING: {
    icon: '🕑',
    title: 'Fila de espera',
    buttonTitle: 'Iniciar Produção',
  },
  IN_PRODUCTION: {
    icon: '👩‍🍳',
    title: 'Em produção',
    buttonTitle: 'Concluir Pedido',
  },
  DONE: {
    icon: '✅',
    title: 'Pronto!',
    buttonTitle: 'Finalizar Pedido',
  },
};

interface UseOrderModalProps {
  order: OrderItemDetails;
  onClose: () => void;
}

export function useOrderModal({ order, onClose }: UseOrderModalProps) {
  const { mutateAsync, isLoading } = useMutation(orderItemsService.update);

  async function handleChangeStatusItem() {
    let newStatus = '';

    if (order.status === 'DONE') {
      newStatus = 'delivered-to-table';
    } else {
      newStatus = order.status === 'WAITING' ? 'in-production' : 'done';
    }

    try {
      await mutateAsync({ id: order.id, newStatus });
    } catch (error) {
      if (isAxiosError(error)) {
        const message = errorMessagesOrders[error.response?.data.message];

        toast({
          type: 'DANGER',
          title: message,
        });

        return;
      }
    } finally {
      onClose();
    }
  }

  return {
    isLoading,
    handleChangeStatusItem,
    selectedStatusInfo: statusOrder[order.status as keyof typeof statusOrder],
  };
}
