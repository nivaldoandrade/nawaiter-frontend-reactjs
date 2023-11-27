import { SearchIcon } from '../../../../../../components/Icons/SearchIcon';
import { TrashIcon } from '../../../../../../components/Icons/TrashIcon';
import { Input } from '../../../../../../components/Input';
import { Ingredient as IIngredient } from '../../../../../../types/Product';

import { IngredientModal } from './IngredientModal';
import { Ingredient, ListIngredients, Container } from './styles';
import { useIngredientInput } from './useIngredientInput';

interface IngredientInputProps {
  onSetIngredientToForm: (ingredients: IIngredient[]) => void;
  ingredients?: IIngredient[];
}

export function IngredientInput({
  onSetIngredientToForm,
  ingredients,
}: IngredientInputProps) {
  const {
    isVisibleModal,
    filteredIngredients,
    handleChangeSearchIngrendient,
    handleToggleModal,
    handleAddIngredient,
    handleDeleteIngredient,
    searchIngredient,
  } = useIngredientInput({ onSetIngredientToForm, ingredients });

  return (
    <Container>
      <header>
        <strong>Ingredientes</strong>
        <button type="button" onClick={handleToggleModal}>
          Novo Ingrediente
        </button>
      </header>
      <Input
        label="Busque o ingrediente"
        placeholder="Ex: Cheddar"
        icon={SearchIcon}
        onChange={handleChangeSearchIngrendient}
        value={searchIngredient}
      />
      <ListIngredients>
        {filteredIngredients.map((ingredient) => (
          <Ingredient key={ingredient.name}>
            <span>{`${ingredient.icon}  ${ingredient.name}`}</span>
            <button
              aria-label="Trash"
              type="button"
              onClick={() => handleDeleteIngredient(ingredient.name)}
            >
              <TrashIcon />
            </button>
          </Ingredient>
        ))}
      </ListIngredients>

      {isVisibleModal && (
        <IngredientModal
          onClose={handleToggleModal}
          onSubmit={handleAddIngredient}
        />
      )}
    </Container>
  );
}
