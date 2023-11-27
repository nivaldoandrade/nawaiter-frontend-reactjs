import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import errorsMessagesTables from '../../../../../constants/errorsMessagesTables';
import { usePasswordSchema } from '../../../../../hooks/usePasswordSchema';
import { ITable, ITableWithPassword } from '../../../../../types/Table';
import { toast } from '../../../../../utils/toast';

interface userTableFormProps<T> {
  onSubmit: (user: T) => Promise<void>;
  table?: ITable;
}

const schema = z.object({
  name: z.string().nonempty('Nome é obrigátorio'),
  username: z.string().nonempty('Username é obrigátorio'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function useTableForm({
  onSubmit,
  table,
}: userTableFormProps<Omit<ITableWithPassword, 'id'>>) {
  const schemaMerged = usePasswordSchema({
    schema,
    isData: !!table,
  });

  const {
    handleSubmit: RHFHandleSubmit,
    register,
    formState: { errors, isValid, isDirty },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schemaMerged),
    defaultValues: {
      name: table?.name,
      username: table?.username,
      password: '',
    },
  });

  const handleSubmit = RHFHandleSubmit(async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      if (!isAxiosError(error)) {
        return;
      }

      const fieldName = error.response?.data.fieldName;
      const message = errorsMessagesTables[error.response?.data.message];

      setError(fieldName, {
        message,
      });

      toast({
        type: 'DANGER',
        title:
          message ??
          'Ocorreu um erro, tente novamente ou entre contato com administrador.',
      });
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isFormValid: isValid && isDirty,
  };
}
