import { ReactComponent as IllustrationIcon } from '../../assets/images/illustration.svg';
import { useAminatedunmount } from '../../hooks/useAminatedUnmount';
import { ReactPortal } from '../ReactPortal';

import { Overlay } from './styles';

interface SplashScreenProps {
  isLoading: boolean;
}

export function SplashScreen({ isLoading }: SplashScreenProps) {
  const { animationRef, shouldRender } = useAminatedunmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={animationRef} isLeaving={!isLoading}>
        <IllustrationIcon />
        <h3>NAWAITER</h3>
        <span>APP</span>
      </Overlay>
    </ReactPortal>
  );
}
