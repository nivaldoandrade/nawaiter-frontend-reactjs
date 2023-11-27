import { TheadStyled } from './styles';

interface TableHeaderProps {
  children: React.ReactNode;
}

export function Thead({ children }: TableHeaderProps) {
  return (
    <TheadStyled>
      <tr>{children}</tr>
    </TheadStyled>
  );
}
