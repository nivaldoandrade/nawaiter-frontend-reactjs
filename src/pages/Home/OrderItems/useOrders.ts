import { useEffect } from 'react';

import { useModal } from '../../../hooks/useModal';
import { socket } from '../../../services/socket';
import { OrderItemDetails } from '../../../types/OrderItem';

interface UseOrdersProps {
  refetch: () => void;
}

export function useOrders({ refetch }: UseOrdersProps) {
  const {
    isVisible: isVisibleViewModal,
    data: orderBeingView,
    handleOpenModal: handleOpenViewModal,
    handleCloseModal: handleCloseViewModal,
  } = useModal<OrderItemDetails>();

  useEffect(() => {
    function onOrder(isOrder: boolean) {
      if (isOrder) {
        refetch();

        // toast({
        // 	type: 'SUCCESS',
        // 	title: 'O pedido foi atualizado'
        // });
      }
    }

    socket.on('order', onOrder);

    return () => {
      console.log('off');
      socket.off('order', onOrder);
    };
  }, [refetch]);

  return {
    isVisibleViewModal,
    orderBeingView,
    handleOpenViewModal,
    handleCloseViewModal,
  };
}
