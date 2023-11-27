import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '../../../../../../components/Form';
import { Input } from '../../../../../../components/Input';
import { SubModal } from '../../../../../../components/SubModal';
import { Ingredient } from '../../../../../../types/Product';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  icon: z.string().emoji('Emoji é obrigatório'),
});

interface NewIngredientProps {
  onClose: () => void;
  onSubmit: (ingredient: Ingredient) => void;
}

type FormData = {
  icon: string;
  name: string;
};

export function IngredientModal({ onClose, onSubmit }: NewIngredientProps) {
  const {
    register,
    handleSubmit: RHFHandleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = RHFHandleSubmit((data) => {
    onSubmit(data);
    onClose();
  });

  return (
    <SubModal
      title="Novo Ingrediente"
      onClose={onClose}
      isFormValid={!isValid}
      rightButton={{
        title: 'Salvar Alteração',
        formId: 'formIngredient',
        onClick: handleSubmit,
      }}
    >
      <Form onSubmit={handleSubmit} id="formIngredient">
        <Input
          label="Emoji"
          type="text"
          placeholder="Ex: 🧀"
          {...register('icon')}
        />
        <Input
          label="Nome do Ingrediente"
          type="text"
          placeholder="Ex: Quatro Queijos"
          {...register('name')}
        />
      </Form>
    </SubModal>
  );
}
