import { useCallback, useState } from 'react';

interface ErrorState {
  field: string;
  message: string;
}

export function useErrors() {
  const [errors, setErrors] = useState<ErrorState[]>([]);

  const setError = useCallback(
    ({ field, message }: ErrorState) => {
      const errorIsAlreadyExists = errors.find(
        (error) => error.field === field,
      );

      if (errorIsAlreadyExists) {
        return;
      }

      setErrors((state) => [...state, { field, message }]);
    },
    [errors],
  );

  const getErrorMessageByField = useCallback(
    (field: string) => errors.find((error) => error.field === field)?.message,
    [errors],
  );

  const removeError = useCallback((field: string) => {
    setErrors((state) => state.filter((error) => error.field !== field));
  }, []);

  return {
    errors,
    setError,
    getErrorMessageByField,
    removeError,
  };
}
