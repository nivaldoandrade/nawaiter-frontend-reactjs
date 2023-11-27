import { useEffect, useRef } from 'react';

import { ReactComponent as ErrorIcon } from '../../../assets/images/error.svg';
import { IToast } from '../../../types/Toast';
import { CheckIcon } from '../../Icons/CheckIcon';
import { CloseIcon } from '../../Icons/CloseIcon';

import { Container } from './styles';

interface ToastMessageProps {
  message: IToast;
  onPendingRemoveMessageId: (id: number) => void;
  isLeaving: boolean;
  onAnimatedEnd: (id: number) => void;
}

const durationDefault = 20000;

const messageTypes = {
  DANGER: <ErrorIcon />,
  SUCCESS: <CheckIcon />,
  DEFAULT: '',
};

export function ToastMessage({
  message,
  onPendingRemoveMessageId,
  isLeaving,
  onAnimatedEnd,
}: ToastMessageProps) {
  const animatedElementRef = useRef({} as HTMLDivElement);

  useEffect(() => {
    function handleAnimatedEnd() {
      onAnimatedEnd(message.id);
    }

    const elementRef = animatedElementRef.current;

    if (isLeaving) {
      elementRef.addEventListener('animationend', handleAnimatedEnd);
    }

    return () => {
      elementRef.removeEventListener('animationend', handleAnimatedEnd);
    };
  }, [isLeaving, message, onAnimatedEnd]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onPendingRemoveMessageId(message.id);
    }, message.duration || durationDefault);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [message, onPendingRemoveMessageId]);

  function handleRemove() {
    onPendingRemoveMessageId(message.id);
  }

  return (
    <Container
      type={message.type}
      isLeaving={isLeaving}
      duration={message.duration || durationDefault}
      ref={animatedElementRef}
    >
      {messageTypes[message.type]}
      <span>{message.title}</span>
      <button aria-label="Close" type="button" onClick={handleRemove}>
        <CloseIcon />
      </button>
    </Container>
  );
}
