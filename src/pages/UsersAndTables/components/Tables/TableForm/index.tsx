import { Form } from '../../../../../components/Form';
import { Input } from '../../../../../components/Input';
import { SubModal } from '../../../../../components/SubModal';
import { ITable, ITableWithPassword } from '../../../../../types/Table';

import { useTableForm } from './useTableForm';

interface TableFormProps<T> {
  title: string;
  table?: ITable;
  onSubmit: (user: T) => Promise<void>;
  isLoading: boolean;
  onClose: () => void;
}

export function TableForm({
  title,
  table,
  onSubmit,
  isLoading,
  onClose,
}: TableFormProps<Omit<ITableWithPassword, 'id'>>) {
  const { handleSubmit, register, errors, isFormValid } = useTableForm({
    onSubmit,
    table,
  });

  return (
    <SubModal
      title={title}
      onClose={onClose}
      isFormValid={!isFormValid}
      isLoading={isLoading}
      rightButton={{
        type: 'submit',
        title: !table ? 'Cadastrar mesa' : 'Salvar Alterações',
        onClick: handleSubmit,
        formId: 'form-table',
      }}
    >
      <Form onSubmit={handleSubmit} id="form-table">
        <Input
          label="Nome*"
          title="Nome"
          type="text"
          placeholder="Mesa 1"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Username*"
          title="Username"
          type="text"
          placeholder="mesa1"
          error={errors.username?.message}
          {...register('username')}
        />
        <Input
          label="Senha*"
          title="Senha"
          type="password"
          placeholder="*********"
          error={errors.password?.message}
          {...register('password')}
        />
      </Form>
    </SubModal>
  );
}
