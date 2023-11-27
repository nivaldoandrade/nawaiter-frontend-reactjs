import { useMutation } from '@tanstack/react-query';

import categoriesService from '../../../../../services/categoriesService';
import { queryClient } from '../../../../../services/QueryClient';
import { ICategory } from '../../../../../types/Category';
import { toast } from '../../../../../utils/toast';
import { CategoryForm } from '../CategoryForm';

interface EditCategoryProps {
  category: ICategory;
  onClose: () => void;
  onOpenDeleteModal: (category: ICategory) => void;
}

export function EditCategory({
  category,
  onClose,
  onOpenDeleteModal,
}: EditCategoryProps) {
  const { mutateAsync, isLoading } = useMutation(categoriesService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
  });

  async function handleSubmit(editCategory: Omit<ICategory, 'id'>) {
    try {
      const data = {
        id: category.id,
        ...editCategory,
      };

      await mutateAsync(data);

      onClose();

      toast({
        type: 'SUCCESS',
        title: 'Categoria editada com sucesso!',
      });
    } catch {
      toast({
        type: 'DANGER',
        title:
          'Ocorreu um erro, tente novamente ou entre em contato com administrador.',
      });
    }
  }

  return (
    <CategoryForm
      isSubmitting={isLoading}
      category={category}
      onSubmit={handleSubmit}
      onClose={onClose}
      onOpenDeleteModal={onOpenDeleteModal}
    />
  );
}
