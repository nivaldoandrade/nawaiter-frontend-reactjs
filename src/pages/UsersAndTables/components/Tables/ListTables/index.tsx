import { ActionButtons } from '../../../../../components/Table/ActionButtons';
import { Table } from '../../../../../components/Table/Table';
import { Thead } from '../../../../../components/Table/Thead';
import { ITable } from '../../../../../types/Table';

import { SkeletonTablesList } from './SkeletonTablesList';

interface ListTablesProps {
  tables?: ITable[];
  isLoading: boolean;
  onOpenEditModal: (table: ITable) => void;
  onOpenDeleteModal: (table: ITable) => void;
}

export function ListTables({
  tables,
  isLoading,
  onOpenEditModal,
  onOpenDeleteModal,
}: ListTablesProps) {
  return (
    <Table>
      <Thead>
        <th>Nome</th>
        <th>Username</th>
        <th>Ações</th>
      </Thead>

      <tbody>
        {isLoading ? (
          <SkeletonTablesList />
        ) : (
          <>
            {tables &&
              tables.map((table) => (
                <tr key={table.id}>
                  <td>{table.name}</td>
                  <td>{table.username}</td>
                  <td>
                    <ActionButtons
                      onEdit={() => onOpenEditModal(table)}
                      onDelete={() => onOpenDeleteModal(table)}
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
