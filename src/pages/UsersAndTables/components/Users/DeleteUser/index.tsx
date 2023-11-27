import { Form } from '../../../../../components/Form';
import { Input } from '../../../../../components/Input';
import { SubModal } from '../../../../../components/SubModal';
import { User } from '../../../../../types/User';

import { useDeleteUser } from './useDeleteUser';

interface DeleteUserProps {
  onClose: () => void;
  user: User;
}

export function DeleteUser({ onClose, user }: DeleteUserProps) {
  const { isLoading, handleDeleteUser } = useDeleteUser({ user, onClose });

  return (
    <SubModal
      title="Excluir Usuário"
      question="Tem certeza que deseja excluir o usuário?"
      isLoading={isLoading}
      onClose={onClose}
      leftButton={{ title: 'Manter Usuário', onClick: onClose }}
      rightButton={{ title: 'Excluir Usuário', onClick: handleDeleteUser }}
    >
      <Form>
        <Input label="Nome" value={user.name} disabled />
        <Input label="Username" value={user.username} disabled />
      </Form>
    </SubModal>
  );
}
