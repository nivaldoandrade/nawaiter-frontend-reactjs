import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { queryClient } from '../../../../../services/QueryClient';
import {
  IProduct,
  IProductSubmit,
  Ingredient,
} from '../../../../../types/Product';
import { formatPrice } from '../../../../../utils/formartPrice';
import { formatCurrencyString } from '../../../../../utils/formatCurrencyString';

const schemaIngredients = z.object({
  icon: z.string(),
  name: z.string(),
});

const schema = z.object({
  imagePath: z.union([
    z.custom<File>((v) => v instanceof File, {
      message: 'Imagem é obrigatória',
    }),
    z.string().nonempty(),
  ]),
  name: z.string().nonempty('Nome é obrigatório'),
  description: z.string().max(110, 'Máximo 110 caracteres').optional(),
  price: z
    .string()
    .nonempty('Preço é obrigatório')
    .transform((v) => formatCurrencyString(v)),
  category: z.string().nonempty('Categoria é obrigatório'),
  ingredients: z.array(schemaIngredients).optional(),
});

export type formDataProduct = z.infer<typeof schema>;

interface UseProductModalProps {
  onClose: () => void;
  onSubmit: (product: IProductSubmit) => Promise<void>;
  product?: IProduct | null;
}

export function useProductModal({
  onClose,
  onSubmit,
  product,
}: UseProductModalProps) {
  const {
    control,
    register,
    handleSubmit: RHFHandleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm<formDataProduct>({
    resolver: zodResolver(schema),
    defaultValues: {
      imagePath: product?.imagePath,
      name: product?.name,
      description: product?.description,
      price: product?.price ? formatPrice(product?.price) : '',
      category: product?.category.id,
      ingredients: product?.ingredients,
    },
  });

  const handleSubmitt = RHFHandleSubmit((data) => {
    onSubmit(data);
  });

  function handleCloseModal() {
    queryClient.removeQueries(['categories'], { exact: true });
    onClose();
  }

  function setIngredientToForm(ingredients: Ingredient[]) {
    setValue('ingredients', ingredients, { shouldDirty: true });
  }

  return {
    handleSubmitt,
    register,
    control,
    errors,
    handleCloseModal,
    setIngredientToForm,
    isformValid: isValid && isDirty,
  };
}
