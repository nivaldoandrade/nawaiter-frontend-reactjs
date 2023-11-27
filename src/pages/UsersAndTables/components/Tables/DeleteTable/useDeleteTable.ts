import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import errorsMessagesTables from '../../../../../constants/errorsMessagesTables';
import { queryClient } from '../../../../../services/QueryClient';
import tablesService from '../../../../../services/tablesService';
import { ITable } from '../../../../../types/Table';
import { toast } from '../../../../../utils/toast';

interface UseDeleteTableProps {
  onClose: () => void;
  table: ITable;
}

export function useDeleteTable({ table, onClose }: UseDeleteTableProps) {
  const { isLoading, mutateAsync } = useMutation(tablesService.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tables']);
    },
  });

  async function handleDeleteTable() {
    try {
      await mutateAsync({
        id: table.id,
      });

      toast({
        type: 'SUCCESS',
        title: 'Mesa deletado com sucesso',
      });
    } catch (error) {
      if (!isAxiosError(error)) {
        return;
      }

      const message = errorsMessagesTables[error.response?.data.message];

      toast({
        type: 'DANGER',
        title:
          message ??
          'Ocorreu um erro, tente novamente ou entre contato com administrador.',
      });
    } finally {
      onClose();
    }
  }

  return {
    isLoading,
    handleDeleteTable,
  };
}
