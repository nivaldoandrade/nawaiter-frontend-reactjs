import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { SubModal } from '../../../../../components/SubModal';
import errorsMessagesCategories from '../../../../../constants/errorsMessagesCategories';
import categoriesService from '../../../../../services/categoriesService';
import { queryClient } from '../../../../../services/QueryClient';
import { ICategory } from '../../../../../types/Category';
import { toast } from '../../../../../utils/toast';

import { Category } from './styles';

interface DeleteCategoryProps {
  category: ICategory;
  onClose: () => void;
  onCloseEditModal?: () => void;
}

export function DeleteCategory({
  category,
  onClose,
  onCloseEditModal,
}: DeleteCategoryProps) {
  const { mutateAsync, isLoading } = useMutation(categoriesService.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
  });

  async function handleDeleteCategory() {
    try {
      await mutateAsync(category.id);

      toast({
        type: 'SUCCESS',
        title: 'Categoria excluida com sucesso!',
      });
    } catch (error) {
      if (!isAxiosError(error)) {
        return;
      }

      const message = errorsMessagesCategories[error.response?.data.message];

      toast({
        type: 'DANGER',
        title:
          message ??
          'Ocorreu um erro ao excluir categoria, tente novamente ou entre contato com administrador.',
      });
    } finally {
      onCloseEditModal?.();
      onClose();
    }
  }

  return (
    <SubModal
      title="Excluir Categoria"
      onClose={() => onClose()}
      question="Tem certeza que deseja excluir a categoria?"
      isLoading={isLoading}
      leftButton={{ title: 'Manter Categoria', onClick: onClose }}
      rightButton={{
        title: 'Excluir Categoria',
        onClick: handleDeleteCategory,
      }}
    >
      <Category>
        <i>{category.icon}</i>
        {category.name}
      </Category>
    </SubModal>
  );
}
