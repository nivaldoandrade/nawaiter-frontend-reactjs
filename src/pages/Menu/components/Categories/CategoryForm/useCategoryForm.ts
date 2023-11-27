import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ICategory } from '../../../../../types/Category';

const schema = z.object({
  icon: z.string().emoji('Emoji é obrigatório'),
  name: z.string().nonempty('Nome é obrigatório'),
});

type FormData = z.infer<typeof schema>;

interface UseCategoryForm {
  onSubmit: (category: Omit<ICategory, 'id'>) => Promise<void>;
  category?: ICategory;
}

export function useCategoryForm({ onSubmit, category }: UseCategoryForm) {
  const {
    register,
    handleSubmit: RHFHandleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      icon: category?.icon,
      name: category?.name,
    },
  });

  const handleSubmit = RHFHandleSubmit((data) => {
    onSubmit(data);
  });

  return {
    register,
    handleSubmit,
    errors,
    isFormValid: isValid && isDirty,
  };
}
