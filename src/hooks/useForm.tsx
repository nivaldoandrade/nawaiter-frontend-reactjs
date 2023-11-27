import { useCallback, useState } from 'react';

import { useErrors } from './useErrors';

export function useForm<T>(dataForm?: T) {
  const [formValues, setFormValues] = useState(() => {
    if (dataForm) {
      return dataForm;
    }

    return {} as T;
  });

  const { errors, setError, removeError, getErrorMessageByField } = useErrors();

  const handleChangeValues = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      const isFieldRequired = event.target.required;
      const fieldTitle = event.target.title;

      if (!fieldValue && isFieldRequired) {
        setError({
          field: fieldName,
          message: `${fieldTitle} é obrigatório`,
        });
      } else {
        removeError(fieldName);
      }

      setFormValues((state) => ({
        ...state,
        [fieldName]: fieldValue,
      }));
    },
    [removeError, setError],
  );

  return {
    formValues,
    handleChangeValues,
    getErrorMessageByField,
    errors,
    setError,
  };
}
