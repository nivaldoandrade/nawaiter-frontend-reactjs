import { Form } from '../../../../../components/Form';
import { Input } from '../../../../../components/Input';
import { SubModal } from '../../../../../components/SubModal';
import { ICategory } from '../../../../../types/Category';

import { useCategoryForm } from './useCategoryForm';

interface CategoryFormProps {
  isSubmitting: boolean;
  category?: ICategory;
  onSubmit: (category: Omit<ICategory, 'id'>) => Promise<void>;
  onClose: () => void;
  onOpenDeleteModal?: (category: ICategory) => void;
}

export function CategoryForm({
  isSubmitting,
  category,
  onSubmit,
  onClose,
  onOpenDeleteModal,
}: CategoryFormProps) {
  const { register, handleSubmit, errors, isFormValid } = useCategoryForm({
    onSubmit,
    category,
  });

  return (
    <SubModal
      title={!category ? 'Nova Categoria' : 'Editar Categoria'}
      onClose={onClose}
      isLoading={isSubmitting}
      isFormValid={!isFormValid}
      {...(category && {
        leftButton: {
          title: 'Excluir Categoria',
          onClick: () => onOpenDeleteModal?.(category),
        },
      })}
      rightButton={{
        title: category ? 'Salvar Alterações' : 'Cadastrar categoria',
        onClick: handleSubmit,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          label="Emoji*"
          title="Emoji"
          type="text"
          placeholder="Ex: 🍔"
          error={errors.icon?.message}
          {...register('icon')}
        />
        <Input
          label="Nome da Categoria*"
          title="Nome"
          type="text"
          placeholder="Ex: Lanches"
          error={errors.name?.message}
          {...register('name')}
        />
      </Form>
    </SubModal>
  );
}
