import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

import { queryClient } from '../../../../../services/QueryClient';
import usersService from '../../../../../services/usersService';
import { UserWithPassword } from '../../../../../types/User';
import { toast } from '../../../../../utils/toast';
import { UseForm } from '../UserForm';

interface NewUserProps {
  onClose: () => void;
}

export function NewUser({ onClose }: NewUserProps) {
  const { isLoading, mutateAsync } = useMutation(usersService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSubmit = useCallback(
    async (data: Omit<UserWithPassword, 'id'>) => {
      await mutateAsync({
        ...data,
      });

      toast({
        type: 'SUCCESS',
        title: 'Usuário criado com sucesso',
      });

      onClose();
    },
    [mutateAsync, onClose],
  );

  return (
    <UseForm
      title="Novo Usuário"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      onClose={onClose}
    />
  );
}
