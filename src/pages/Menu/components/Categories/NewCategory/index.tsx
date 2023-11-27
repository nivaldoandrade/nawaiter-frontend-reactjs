import { useMutation } from '@tanstack/react-query';

import categoriesService from '../../../../../services/categoriesService';
import { queryClient } from '../../../../../services/QueryClient';
import { ICategory } from '../../../../../types/Category';
import { toast } from '../../../../../utils/toast';
import { CategoryForm } from '../CategoryForm';

interface NewCategoryProps {
  onClose: () => void;
}

export function NewCategory({ onClose }: NewCategoryProps) {
  const { mutateAsync, isLoading } = useMutation(categoriesService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
  });

  async function handleSubmit(category: Omit<ICategory, 'id'>) {
    try {
      await mutateAsync(category);

      onClose();

      toast({
        type: 'SUCCESS',
        title: 'Categoria criada com sucesso!',
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
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
}
