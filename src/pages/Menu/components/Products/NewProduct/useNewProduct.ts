import { useMutation } from '@tanstack/react-query';

import productsService from '../../../../../services/productsService';
import { queryClient } from '../../../../../services/QueryClient';
import { IProductSubmit } from '../../../../../types/Product';
import { toast } from '../../../../../utils/toast';

interface UseNewProductProps {
  onClose: () => void;
}

export function useNewProduct({ onClose }: UseNewProductProps) {
  const { mutateAsync, isLoading } = useMutation(productsService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  async function handleSubmit(data: IProductSubmit) {
    try {
      const newProduct = {
        ...data,
        ingredients: JSON.stringify(data.ingredients),
      };

      await mutateAsync(newProduct);

      onClose();

      toast({
        type: 'SUCCESS',
        title: 'Produto criado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'DANGER',
        title:
          'Ocorreu um erro ao criar produto, tente novamente ou entre contato com administrador.',
      });
    }
  }

  return {
    handleSubmit,
    isLoading,
  };
}
