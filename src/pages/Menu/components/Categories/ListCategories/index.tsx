import { ActionButtons } from '../../../../../components/Table/ActionButtons';
import { Table } from '../../../../../components/Table/Table';
import { Thead } from '../../../../../components/Table/Thead';
import { ICategory } from '../../../../../types/Category';

import { SkeletonCategoriesList } from './SkeletonCategoriesList';

interface ListCategoriesProps {
  categories: ICategory[];
  isLoading: boolean;
  onOpenEditModal: (category: ICategory) => void;
  onOpenDeleteModal: (category: ICategory) => void;
}

export function ListCategories({
  categories,
  isLoading,
  onOpenEditModal,
  onOpenDeleteModal,
}: ListCategoriesProps) {
  return (
    <Table>
      <Thead>
        <th>Emoji</th>
        <th>Name</th>
        <th>Ações</th>
      </Thead>
      <tbody>
        {isLoading ? (
          <SkeletonCategoriesList />
        ) : (
          <>
            {categories.map((category) => (
              <tr key={category.id}>
                <td style={{ width: '96px' }}>{category.icon}</td>
                <td>{category.name}</td>
                <td>
                  <ActionButtons
                    onEdit={() => onOpenEditModal(category)}
                    onDelete={() => onOpenDeleteModal(category)}
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
