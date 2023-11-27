import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../../../services/QueryClient';
import tablesService from '../../../../../services/tablesService';
import { ITable, ITableWithPassword } from '../../../../../types/Table';
import { toast } from '../../../../../utils/toast';
import { TableForm } from '../TableForm';

interface EditTableProps {
  onClose: () => void;
  table: ITable;
}

export function EditTable({ onClose, table }: EditTableProps) {
  const { mutateAsync, isLoading } = useMutation(tablesService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tables']);
    },
  });

  async function handleSubmit(data: Omit<ITableWithPassword, 'id'>) {
    await mutateAsync({
      id: table.id,
      ...data,
    });

    toast({
      type: 'SUCCESS',
      title: 'Mesa editada com sucesso',
    });
    onClose();
  }

  return (
    <TableForm
      title="Editar Mesa"
      table={table}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
}
