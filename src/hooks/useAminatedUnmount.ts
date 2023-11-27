import { useEffect, useRef, useState } from 'react';

export function useAminatedunmount(isLoading: boolean) {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    }

    const handleAnimationEnd = () => {
      setShouldRender(false);
    };

    const animationRefElement = animationRef.current;

    if (!isLoading && animationRefElement) {
      animationRefElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (animationRefElement) {
        animationRefElement.removeEventListener(
          'animationend',
          handleAnimationEnd,
        );
      }
    };
  }, [isLoading]);

  return {
    shouldRender,
    animationRef,
  };
}
