import { ReactComponent as EmptyIcon } from '../../assets/images/empty.svg';

import { Container } from './styles';

interface EmptyListProps {
  children: React.ReactNode;
}

export function EmptyList({ children }: EmptyListProps) {
  return (
    <Container>
      <EmptyIcon />
      <span>{children}</span>
    </Container>
  );
}
