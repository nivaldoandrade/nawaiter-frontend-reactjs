import { CloseIcon } from '../Icons/CloseIcon';

import { Button } from './styles';

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CloseButton({ ...rest }: CloseButtonProps) {
  return (
    <Button type="button" {...rest}>
      <CloseIcon />
    </Button>
  );
}
