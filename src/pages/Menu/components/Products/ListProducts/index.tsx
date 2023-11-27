import { Table } from '../../../../../components/Table/Table';
import { Thead } from '../../../../../components/Table/Thead';
import { IProduct } from '../../../../../types/Product';
import { Product } from '../Product';

import { SkeletonProductsList } from './SkeletonProductList';

interface ListProductsProps {
  products: IProduct[];
  isLoading: boolean;
  handleEditProduct: (product: IProduct) => void;
  handleOpenDeleteModal: (product: IProduct) => void;
}

export function ListProducts({
  products,
  isLoading,
  handleEditProduct,
  handleOpenDeleteModal,
}: ListProductsProps) {
  return (
    <Table>
      <Thead>
        <th style={{ width: '96px' }}>Imagem</th>
        <th>Nome</th>
        <th>Categoria</th>
        <th>Preço</th>
        <th>Ações</th>
      </Thead>
      <tbody>
        {isLoading ? (
          <SkeletonProductsList />
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleOpenDeleteModal}
            />
          ))
        )}
      </tbody>
    </Table>
  );
}
