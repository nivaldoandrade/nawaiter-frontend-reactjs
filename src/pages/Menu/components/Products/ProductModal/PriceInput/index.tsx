import { Control, Controller } from 'react-hook-form';

import { Input } from '../../../../../../components/Input';
import { currencyMask } from '../../../../../../utils/currencyMask';
import { formDataProduct } from '../useProductModal';

interface PriceInputProps {
  control?: Control<formDataProduct>;
  error?: string;
}

export function PriceInput({ control, error }: PriceInputProps) {
  return (
    <Controller
      control={control}
      name="price"
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <Input
          label="Preço*"
          placeholder="R$ 10,00"
          type="text"
          maxLength={110}
          error={error}
          onChange={(e) => {
            const { value } = e.target;

            onChange(currencyMask(value));
          }}
          value={value}
        />
      )}
    />
  );
}
