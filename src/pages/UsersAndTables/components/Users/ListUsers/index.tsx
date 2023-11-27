import { ActionButtons } from '../../../../../components/Table/ActionButtons';
import { Table } from '../../../../../components/Table/Table';
import { Thead } from '../../../../../components/Table/Thead';
import { useAuth } from '../../../../../hooks/useAuth';
import { User } from '../../../../../types/User';

import { SkeletonUsersList } from './SkeletonUsersList';

interface ListUsersProps {
  users?: User[];
  isLoading: boolean;
  onOpenEditModal: (user: User) => void;
  onOpenDeleteModal: (user: User) => void;
}

export function ListUsers({
  users,
  isLoading,
  onOpenEditModal,
  onOpenDeleteModal,
}: ListUsersProps) {
  const { user: userLoggedIn } = useAuth();

  return (
    <Table>
      <Thead>
        <th>Nome</th>
        <th>Username</th>
        <th>Cargo</th>
        <th>Acões</th>
      </Thead>

      <tbody>
        {isLoading ? (
          <SkeletonUsersList />
        ) : (
          <>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <ActionButtons
                      onEdit={() => onOpenEditModal(user)}
                      onDelete={() => onOpenDeleteModal(user)}
                      disabled={user.id === userLoggedIn?.id}
                    />
                  </td>
                </tr>
              ))}
          </>
        )}
      </tbody>
    </Table>
  );
}
