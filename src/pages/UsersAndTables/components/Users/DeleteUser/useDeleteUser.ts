import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../../../../services/QueryClient';
import usersService from '../../../../../services/usersService';
import { User } from '../../../../../types/User';
import { toast } from '../../../../../utils/toast';

interface UseDeleteUserProps {
  onClose: () => void;
  user: User;
}

export function useDeleteUser({ user, onClose }: UseDeleteUserProps) {
  const { isLoading, mutateAsync } = useMutation(usersService.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  async function handleDeleteUser() {
    try {
      await mutateAsync({
        id: user.id,
      });

      onClose();

      toast({
        type: 'SUCCESS',
        title: 'Usuário deletado com sucesso',
      });
    } catch {
      toast({
        type: 'DANGER',
        title:
          'Ocorreu um erro, tente novamente ou entre contato com administrador.',
      });
    }
  }

  return {
    isLoading,
    handleDeleteUser,
  };
}
