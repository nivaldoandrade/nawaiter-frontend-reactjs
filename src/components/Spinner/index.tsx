import { StyledSpinner } from './styles';

interface SpinnerProps {
  size?: number;
  color?: 'main' | 'gray0';
}

export function Spinner({ size = 16, color = 'main' }: SpinnerProps) {
  return <StyledSpinner size={size} color={color} />;
}
