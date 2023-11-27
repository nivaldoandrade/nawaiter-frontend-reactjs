import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { SubModal } from '../../../../../components/SubModal';
import errorsMessagesProducts from '../../../../../constants/errorsMesagesProducts';
import productsService from '../../../../../services/productsService';
import { queryClient } from '../../../../../services/QueryClient';
import { IProduct } from '../../../../../types/Product';
import { toast } from '../../../../../utils/toast';

import { ProductContainer, ProductContent } from './styles';

interface DeleteProductProps {
  product: IProduct;
  onCloseProductModal?: () => void;
  onClose: () => void;
}

export function DeleteProduct({
  product,
  onCloseProductModal,
  onClose,
}: DeleteProductProps) {
  const { isLoading, mutateAsync } = useMutation(productsService.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  async function handleDeleteProduct(id: string) {
    try {
      await mutateAsync(id);

      toast({
        type: 'SUCCESS',
        title: 'Produto excluido com sucesso!',
      });
    } catch (error) {
      if (!isAxiosError(error)) {
        return;
      }

      const message = errorsMessagesProducts[error.response?.data.message];

      toast({
        type: 'DANGER',
        title:
          message ??
          'Ocorreu um erro ao excluir categoria, tente novamente ou entre contato com administrador.',
      });
    } finally {
      onClose();
      onCloseProductModal?.();
    }
  }

  return (
    <SubModal
      title="Excluir Produto"
      onClose={onClose}
      question="Tem certeza que deseja excluir o produto?"
      isLoading={isLoading}
      leftButton={{ title: 'Manter Produto', onClick: onClose }}
      rightButton={{
        title: 'Excluir Produto',
        onClick: () => handleDeleteProduct(product.id),
      }}
    >
      <ProductContainer>
        <ProductContent>
          <img src={product.srcImg} alt={product.name} />
          <div className="details">
            <span>
              <i>{product.category.icon}</i>
              {product.category.name}
            </span>
            <strong>{product.name}</strong>
            <span>{product.priceFormatted}</span>
          </div>
        </ProductContent>
      </ProductContainer>
    </SubModal>
  );
}
