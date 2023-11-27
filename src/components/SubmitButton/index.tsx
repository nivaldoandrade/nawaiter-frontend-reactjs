import { Button } from '../Button';
import { Spinner } from '../Spinner';

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function SubmitButton({
  children,
  isLoading,
  ...rest
}: SubmitButtonProps) {
  return (
    <Button {...rest}>
      {isLoading ? <Spinner color="gray0" /> : children}
    </Button>
  );
}
