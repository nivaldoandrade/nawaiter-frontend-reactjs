import { useAminatedunmount } from '../../hooks/useAminatedUnmount';
import { ReactPortal } from '../ReactPortal';
import { Spinner } from '../Spinner';

import { Overlay } from './styles';

interface SpinnerScreenProps {
  isLoading: boolean;
}

export function SpinnerScreen({ isLoading }: SpinnerScreenProps) {
  const { animationRef, shouldRender } = useAminatedunmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={animationRef} isLeaving={!isLoading}>
        <Spinner size={80} />
      </Overlay>
    </ReactPortal>
  );
}
