import { useMutation } from '@tanstack/react-query';

import { SubModal } from '../../../../../components/SubModal';
import completedOrdersService from '../../../../../services/completedOrdersService';
import { queryClient } from '../../../../../services/QueryClient';
import { CompletedOrder } from '../../../../../types/CompletedOrder';
import { toast } from '../../../../../utils/toast';

interface DeleteCompletedOrderProps {
  order: CompletedOrder;
  onClose: () => void;
  onCloseViewModal: () => void;
}
export function DeleteCompletedOrder({
  order,
  onClose,
  onCloseViewModal,
}: DeleteCompletedOrderProps) {
  const { isLoading } = useMutation(completedOrdersService.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['completedorders']);
    },
  });

  async function handleDeleteCompletedOrder() {
    try {
      // await mutateAsync(order.id);

      onClose();
      onCloseViewModal();

      toast({
        type: 'SUCCESS',
        title: 'Histórico de ordem de pedido  excluido com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'DANGER',
        title:
          'Ocorreu um erro ao excluir produto, tente novamente ou entre contato com administrador.',
      });
    }
  }

  return (
    <SubModal
      title="Excluir Registro"
      question="Tem certeza que deseja excluir a ordem de pedido?"
      isLoading={isLoading}
      onClose={onClose}
      leftButton={{
        title: 'Manter Registro',
        onClick: onClose,
      }}
      rightButton={{
        title: 'Excluir Registro',
        onClick: handleDeleteCompletedOrder,
      }}
    >
      <p>{order.orderNumber}</p>
    </SubModal>
  );
}
