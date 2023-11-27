import React, { ComponentProps, ElementType } from 'react';

import { Container } from './styles';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  icon?: ElementType<React.SVGProps<SVGSVGElement>>;
  error?: string;
  onClick?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, onClick, error, ...rest }, ref) => (
    <Container icon={!!Icon} error={!!error}>
      <div className="input-header">
        <label htmlFor={label}>{label}</label>
        {error && <small>{error}</small>}
      </div>

      <div className="input-group">
        <input type="text" id={label} ref={ref} {...rest} />
        {Icon && (
          <button aria-label={label} type="button" onClick={onClick}>
            <Icon />
          </button>
        )}
      </div>
    </Container>
  ),
);

Input.displayName = 'Input';
