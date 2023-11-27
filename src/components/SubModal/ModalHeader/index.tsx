import { CloseIcon } from '../../Icons/CloseIcon';

import { Header } from './styles';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  isLoading?: boolean;
}

export function ModalHeader({ title, onClose, isLoading }: ModalHeaderProps) {
  return (
    <Header>
      <h4>{title}</h4>
      <button
        aria-label="Close"
        type="button"
        onClick={onClose}
        disabled={isLoading}
      >
        <CloseIcon />
      </button>
    </Header>
  );
}
