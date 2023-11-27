import { ReactComponent as SadIcon } from '../../assets/images/sad.svg';
import { Button } from '../Button';

import { Container } from './styles';

interface ErrorStatusProps {
  message: string;
  onClick: () => void;
}

export function ErrorStatus({ message, onClick }: ErrorStatusProps) {
  return (
    <Container>
      <SadIcon />
      <div>
        <strong>{message}</strong>
        <Button type="button" onClick={onClick}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}
