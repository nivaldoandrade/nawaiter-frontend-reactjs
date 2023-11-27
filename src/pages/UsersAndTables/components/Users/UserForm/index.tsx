import { Controller } from 'react-hook-form';

import { Form } from '../../../../../components/Form';
import { Input } from '../../../../../components/Input';
import { SubModal } from '../../../../../components/SubModal';
import { User, UserWithPassword } from '../../../../../types/User';
import { InputRadio } from '../InputRadio';

import { useUserForm } from './useUserForm';

interface UserFormProps {
  title: string;
  user?: User;
  onSubmit: (user: Omit<UserWithPassword, 'id'>) => Promise<void>;
  isLoading: boolean;
  onClose: () => void;
}

export function UseForm({
  title,
  user,
  onSubmit,
  isLoading,
  onClose,
}: UserFormProps) {
  const { handleSubmit, register, errors, isFormValid, control } = useUserForm({
    onSubmit,
    user,
  });

  return (
    <SubModal
      title={title}
      onClose={onClose}
      isFormValid={!isFormValid}
      isLoading={isLoading}
      rightButton={{
        type: 'submit',
        title: !user ? 'Cadastrar usuário' : 'Salvar Alterações',
        onClick: handleSubmit,
        formId: 'form-user',
      }}
    >
      <Form onSubmit={handleSubmit} id="form-user">
        <Input
          label="Nome*"
          title="Nome"
          type="text"
          placeholder="Jonh Doe"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Username*"
          title="Username"
          type="text"
          placeholder="jonh.doe"
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
        <Controller
          control={control}
          name="role"
          render={({ field: { onChange, value } }) => (
            <InputRadio
              label="Tipo*"
              error={errors.role?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Form>
    </SubModal>
  );
}
