import { useCallback } from 'react';

import { ActionButtons } from '../../../../components/Table/ActionButtons';
import { IProduct } from '../../../../types/Product';

interface ProductProps {
  product: IProduct;
  onEdit: (product: IProduct) => void;
  onDelete: (product: IProduct) => void;
}

export function Product({ product, onEdit, onDelete }: ProductProps) {
  const handleEditProduct = useCallback(() => {
    onEdit(product);
  }, [onEdit, product]);

  const handleOpenDeleteModal = useCallback(() => {
    onDelete(product);
  }, [onDelete, product]);

  return (
    <tr>
      <td>
        <img
          src={product.srcImg}
          alt={product.name}
          style={{ objectFit: 'cover' }}
        />
      </td>
      <td>{product.name}</td>
      <td>{`${product.category.icon} ${product.category.name}`}</td>
      <td>{product.priceFormatted}</td>
      <td>
        <ActionButtons
          onEdit={handleEditProduct}
          onDelete={handleOpenDeleteModal}
        />
      </td>
    </tr>
  );
}
