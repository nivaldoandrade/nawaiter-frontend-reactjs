import { useMutation } from '@tanstack/react-query';

import { useShowProduct } from '../../../../../hooks/useShowProduct';
import productsService from '../../../../../services/productsService';
import { queryClient } from '../../../../../services/QueryClient';
import { IProductSubmit } from '../../../../../types/Product';
import { toast } from '../../../../../utils/toast';

interface UseEditProductProps {
  productId: string;
  onClose: () => void;
}

export function useEditProduct({ productId, onClose }: UseEditProductProps) {
  // const { data, isFetching } = useQuery({
  // 	queryKey: ['product', productId],
  // 	queryFn: async () => {
  // 		return await productsService.show(productId);
  // 	},
  // 	staleTime: 5000
  // });

  const { product, isFetching } = useShowProduct(productId);

  const { mutateAsync, isLoading } = useMutation(productsService.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  async function handleSubmit(editProduct: IProductSubmit) {
    const updatedProduct = {
      ...editProduct,
      id: productId,
      ingredients: JSON.stringify(editProduct.ingredients),
    };

    try {
      await mutateAsync(updatedProduct);
      onClose();

      toast({
        type: 'SUCCESS',
        title: 'Produto editado com sucesso!',
      });
    } catch {
      toast({
        type: 'DANGER',
        title:
          'Ocorreu um erro ao editar o produto, tente novamente ou entre contato com administrador.',
      });
    }
  }

  return {
    product,
    isFetching,
    isLoading,
    handleSubmit,
  };
}
