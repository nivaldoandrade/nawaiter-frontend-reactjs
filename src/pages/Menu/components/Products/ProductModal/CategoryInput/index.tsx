import { Control, Controller } from 'react-hook-form';

import { ErrorInput } from '../../../../../../components/Input/ErrorInput';
import { Spinner } from '../../../../../../components/Spinner';
import { ICategory } from '../../../../../../types/Category';
import { formDataProduct } from '../useProductModal';

import { CategoryContainer, CategoryButton } from './styles';
import { useCategoryInput } from './useCategoryInput';

interface CategoryInputProps {
  category?: ICategory;
  error?: string;
  control?: Control<formDataProduct>;
}

export function CategoryInput({
  category,
  error,
  control,
}: CategoryInputProps) {
  const {
    selectedCategory,
    listInnerRef,
    data,
    isLoading,
    onScroll,
    handleSelectedCategory,
    handleShowCategories,
  } = useCategoryInput({ category });

  return (
    <CategoryContainer isChangeCategory={!!selectedCategory}>
      <div className="header-content">
        <span>Categoria*</span>
        {isLoading && <Spinner />}
        {error && <ErrorInput>{error}</ErrorInput>}
      </div>

      {selectedCategory ? (
        <CategoryButton type="button" onClick={handleShowCategories}>
          <i>{selectedCategory.icon}</i>
          <span>{selectedCategory.name}</span>
          Alterar
        </CategoryButton>
      ) : (
        <div className="category" onScroll={onScroll} ref={listInnerRef}>
          <Controller
            control={control}
            name="category"
            defaultValue={category?.id}
            render={({ field: { onChange } }) => (
              <>
                {data &&
                  data.pages.map((page) =>
                    page.map((category) => (
                      <CategoryButton
                        key={category.id}
                        type="button"
                        title={category.name}
                        onClick={() => {
                          handleSelectedCategory(category);
                          onChange(category.id);
                        }}
                      >
                        <i>{category.icon}</i>
                        <span>{category.name}</span>
                      </CategoryButton>
                    )),
                  )}
              </>
            )}
          />
        </div>
      )}
    </CategoryContainer>
  );
}
