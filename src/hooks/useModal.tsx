import { useCallback, useState } from 'react';

export function useModal<T>() {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const handleOpenModal = useCallback((arg?: T) => {
    setData(null);

    if (arg && arg?.constructor.name === 'Object') {
      setData(arg);
    }

    setIsVisible(true);
  }, []);

  const handleCloseModal = useCallback((arg?: T) => {
    if (arg && arg?.constructor.name === 'Object') {
      setData(arg);
      return;
    }

    setData(null);
    setIsVisible(false);
  }, []);

  return {
    isVisible,
    data,
    handleOpenModal,
    handleCloseModal,
  };
}
