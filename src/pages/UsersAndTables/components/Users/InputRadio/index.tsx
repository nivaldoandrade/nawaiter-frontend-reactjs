import { UserRoles } from '../../../../../types/User';

import { Container } from './styles';

interface InputRadioProps {
  label: string;
  warning?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: UserRoles;
}

export function InputRadio({
  label,
  warning,
  error,
  onChange,
  value,
}: InputRadioProps) {
  return (
    <Container error={!!error}>
      <div className="input-header">
        {label}
        {error && <small>{error}</small>}
      </div>
      <div className="input-group">
        <label htmlFor="admin">
          <input
            aria-label="Admin Input Radio"
            type="radio"
            id="admin"
            name="role"
            title="Tipo"
            value="admin"
            onChange={onChange}
            checked={value === 'admin'}
          />
          Admin
        </label>
        <label htmlFor="garcom">
          <input
            aria-label="Garcom Input Radio"
            type="radio"
            id="garcom"
            name="role"
            title="Tipo"
            value="garcom"
            onChange={onChange}
            checked={value === 'garcom'}
          />
          Garçom
        </label>
      </div>
      {warning && <span>{warning}</span>}
    </Container>
  );
}
