import { Input } from '../../../../../components/Input';
import { ReactPortal } from '../../../../../components/ReactPortal';
import { SubmitButton } from '../../../../../components/SubmitButton';
import { ModalHeader } from '../../../../../components/SubModal/ModalHeader';
import { IProduct, IProductSubmit } from '../../../../../types/Product';

import { CategoryInput } from './CategoryInput';
import { ImageInput } from './ImageInput';
import { IngredientInput } from './IngredientInput';
import { PriceInput } from './PriceInput';
import { FormFooter, ModalBody, Overlay, ProductInfo } from './styles';
import { useProductModal } from './useProductModal';

interface ProductModalProps {
  product?: IProduct | null;
  onClose: () => void;
  onOpenDeleteModal?: (product: IProduct) => void;
  onSubmit: (product: IProductSubmit) => Promise<void>;
  isSubmitting: boolean;
}

export function ProductModal({
  product,
  onClose,
  onOpenDeleteModal,
  onSubmit,
  isSubmitting,
}: ProductModalProps) {
  const {
    handleSubmitt,
    register,
    control,
    errors,
    handleCloseModal,
    setIngredientToForm,
    isformValid,
  } = useProductModal({ onClose, onSubmit, product });

  return (
    <ReactPortal containerId="product-modal-root">
      <Overlay>
        <ModalBody>
          <ModalHeader
            title={product ? 'Editar Produto' : 'Novo Produto'}
            onClose={handleCloseModal}
            isLoading={isSubmitting}
          />
          <form onSubmit={handleSubmitt}>
            <ProductInfo>
              <ImageInput
                product={product}
                error={errors.imagePath?.message}
                control={control}
              />

              <Input
                label="Nome do Produto*"
                type="text"
                placeholder="Quatro Queijos"
                error={errors.name?.message}
                {...register('name')}
              />

              <Input
                label="Descrição"
                placeholder="Pizza de Quatro Queijos com borda tradicional"
                type="text"
                maxLength={110}
                error={errors.description?.message}
                {...register('description')}
              />

              <PriceInput control={control} error={errors.price?.message} />

              <CategoryInput
                category={product?.category}
                control={control}
                error={errors.category?.message}
              />
            </ProductInfo>

            <IngredientInput
              ingredients={product?.ingredients}
              onSetIngredientToForm={setIngredientToForm}
            />

            <FormFooter isProduct={!!product}>
              {product && onOpenDeleteModal && (
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => onOpenDeleteModal(product)}
                >
                  Excluir Produto
                </button>
              )}
              <SubmitButton
                type="submit"
                isLoading={isSubmitting}
                disabled={!isformValid}
              >
                Salvar Alterações
              </SubmitButton>
            </FormFooter>
          </form>
        </ModalBody>
      </Overlay>
    </ReactPortal>
  );
}
