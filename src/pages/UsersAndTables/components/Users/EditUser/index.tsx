import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../../../services/QueryClient';
import usersService from '../../../../../services/usersService';
import { User, UserWithPassword } from '../../../../../types/User';
import { toast } from '../../../../../utils/toast';
import { UseForm } from '../UserForm';

interface EditUserProps {
  onClose: () => void;
  user: User;
}

export function EditUser({ onClose, user }: EditUserProps) {
  const { mutateAsync, isLoading } = useMutation(usersService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  async function handleSubmit(data: Omit<UserWithPassword, 'id'>) {
    await mutateAsync({
      id: user.id,
      ...data,
    });

    toast({
      type: 'SUCCESS',
      title: 'Usuário editado com sucesso',
    });

    onClose();
  }

  return (
    <UseForm
      title="Editar Usuário"
      user={user}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
}
