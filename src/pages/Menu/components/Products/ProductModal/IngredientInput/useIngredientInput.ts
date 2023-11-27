import { useMemo, useState } from 'react';

import { Ingredient } from '../../../../../../types/Product';
import { toast } from '../../../../../../utils/toast';

interface UseIngredientInputProps {
  onSetIngredientToForm: (ingredients: Ingredient[]) => void;
  ingredients?: Ingredient[];
}

export function useIngredientInput({
  onSetIngredientToForm,
  ingredients: ingredientss,
}: UseIngredientInputProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    ingredientss ?? [],
  );
  const [searchIngredient, setSearchIngredient] = useState('');

  const filteredIngredients = useMemo(
    () =>
      ingredients.filter((ingredient) =>
        ingredient.name
          .toLocaleLowerCase()
          .includes(searchIngredient.toLocaleLowerCase()),
      ),
    [ingredients, searchIngredient],
  );

  function handleChangeSearchIngrendient(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setSearchIngredient(event.target.value);
  }

  function handleToggleModal() {
    setIsVisibleModal((state) => !state);
  }

  function handleAddIngredient(ingredient: Ingredient) {
    const ingredientExists = ingredients.some(
      (i) => i.name.toLocaleLowerCase() === ingredient.name.toLocaleLowerCase(),
    );

    if (ingredientExists) {
      toast({
        type: 'DANGER',
        title: `${ingredient.name} já está na lista `,
      });

      return;
    }

    setIngredients((state) => {
      const newState = [...state, ingredient];

      onSetIngredientToForm(newState);

      return newState;
    });
  }

  function handleDeleteIngredient(name: string) {
    setIngredients((state) => {
      const newState = state.filter((ingredient) => ingredient.name !== name);

      onSetIngredientToForm(newState);

      return newState;
    });
  }

  return {
    isVisibleModal,
    filteredIngredients,
    handleChangeSearchIngrendient,
    handleToggleModal,
    handleAddIngredient,
    handleDeleteIngredient,
    searchIngredient,
  };
}
