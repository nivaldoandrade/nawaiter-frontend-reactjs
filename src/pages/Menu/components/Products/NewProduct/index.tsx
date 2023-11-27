import { ProductModal } from '../ProductModal';

import { useNewProduct } from './useNewProduct';

interface NewProductProps {
  onClose: () => void;
}

export function NewProduct({ onClose }: NewProductProps) {
  const { handleSubmit, isLoading } = useNewProduct({ onClose });

  return (
    <ProductModal
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
    />
  );
}
