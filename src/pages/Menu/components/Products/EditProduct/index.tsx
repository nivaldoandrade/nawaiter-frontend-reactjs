import { SpinnerScreen } from '../../../../../components/SpinnerScreen';
import { IProduct } from '../../../../../types/Product';
import { ProductModal } from '../ProductModal';

import { useEditProduct } from './useEditProduct';

interface EditProductProps {
  productId: string;
  onClose: () => void;
  handleOpenDeleteModal: (product: IProduct) => void;
}

export function EditProduct({
  productId,
  onClose,
  handleOpenDeleteModal,
}: EditProductProps) {
  const { product, isFetching, isLoading, handleSubmit } = useEditProduct({
    productId,
    onClose,
  });

  return (
    <>
      <SpinnerScreen isLoading={isFetching} />
      {!isFetching && (
        <ProductModal
          isSubmitting={isLoading}
          product={product}
          onSubmit={handleSubmit}
          onClose={onClose}
          onOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </>
  );
}
