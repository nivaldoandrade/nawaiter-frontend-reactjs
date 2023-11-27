import { Form } from '../../../../../components/Form';
import { Input } from '../../../../../components/Input';
import { SubModal } from '../../../../../components/SubModal';
import { ITable } from '../../../../../types/Table';

import { useDeleteTable } from './useDeleteTable';

interface DeleteTableProps {
  onClose: () => void;
  table: ITable;
}

export function DeleteTable({ onClose, table }: DeleteTableProps) {
  const { isLoading, handleDeleteTable } = useDeleteTable({ table, onClose });

  return (
    <SubModal
      title="Excluir Mesa"
      question="Tem certeza que deseja excluir a mesa?"
      isLoading={isLoading}
      onClose={onClose}
      leftButton={{ title: 'Manter Mesa', onClick: onClose }}
      rightButton={{ title: 'Excluir Mesa', onClick: handleDeleteTable }}
    >
      <Form>
        <Input
          label="Nome"
          name="name"
          type="text"
          value={table.name}
          disabled
        />
        <Input
          label="Username"
          name="username"
          type="text"
          value={table.username}
          disabled
        />
      </Form>
    </SubModal>
  );
}
