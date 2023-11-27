import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../../../services/QueryClient';
import tablesService from '../../../../../services/tablesService';
import { ITableWithPassword } from '../../../../../types/Table';
import { toast } from '../../../../../utils/toast';
import { TableForm } from '../TableForm';

interface NewTableProps {
  onClose: () => void;
}

export function NewTable({ onClose }: NewTableProps) {
  const { isLoading, mutateAsync } = useMutation(tablesService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables'] });
    },
  });

  async function handleSubmit(data: Omit<ITableWithPassword, 'id'>) {
    await mutateAsync({
      ...data,
    });

    toast({
      type: 'SUCCESS',
      title: 'Mesa criada com sucesso',
    });

    onClose();
  }

  return (
    <TableForm
      title="Nova Mesa"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onClose={onClose}
    />
  );
}
