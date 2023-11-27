import { useEffect, useRef } from 'react';

import { ReactPortal } from '../ReactPortal';
import { SubmitButton } from '../SubmitButton';

import { ModalHeader } from './ModalHeader';
import { Footer, Main, ModalBody, Overlay, Question } from './styles';

interface SubModalProps {
  children: React.ReactNode;
  title: string | 'title';
  question?: string;
  onClose: () => void;
  isLoading?: boolean;
  isFormValid?: boolean;
  leftButton?: {
    title: string;
    onClick: () => void;
  };
  rightButton?: {
    title: string;
    formId?: string;
    onClick: () => void;
    type?: 'button' | 'submit';
  };
}

interface EventCloseModal {
  target: EventTarget | null;
  key?: string;
}

export function SubModal({
  children,
  title,
  question,
  onClose,
  isLoading,
  isFormValid,
  leftButton,
  rightButton,
}: SubModalProps) {
  const overlayRef = useRef({} as HTMLDivElement);

  useEffect(() => {
    const overlayRefElement = overlayRef.current;

    function handleCloseModal(event: EventCloseModal) {
      if (overlayRefElement === event.target || event.key === 'Escape') {
        onClose();
      }
    }

    if (overlayRefElement && !isLoading) {
      overlayRefElement.addEventListener('selectstart', handleCloseModal);

      document.addEventListener('keydown', handleCloseModal);
    }

    return () => {
      overlayRefElement?.removeEventListener('selectstart', handleCloseModal);

      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [overlayRef, isLoading, onClose]);

  return (
    <ReactPortal containerId="submodal-root">
      <Overlay ref={overlayRef}>
        <ModalBody>
          <ModalHeader title={title} onClose={onClose} isLoading={isLoading} />
          <Main>
            {question && <Question>{question}</Question>}
            {children}
          </Main>
          <Footer hasLeftButton={!!leftButton}>
            {leftButton && (
              <button
                type="button"
                className="btn-left"
                onClick={leftButton.onClick}
                disabled={isFormValid || isLoading}
              >
                {leftButton.title}
              </button>
            )}
            {rightButton && (
              <SubmitButton
                form={rightButton.formId}
                type={rightButton.type ?? 'button'}
                onClick={rightButton.onClick}
                disabled={isFormValid || isLoading}
                isLoading={isLoading}
              >
                {rightButton.title}
              </SubmitButton>
            )}
          </Footer>
        </ModalBody>
      </Overlay>
    </ReactPortal>
  );
}
