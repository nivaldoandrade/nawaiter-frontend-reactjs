import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import errorsMessagesUsers from '../../../../../constants/errorsMessagesUsers';
import { usePasswordSchema } from '../../../../../hooks/usePasswordSchema';
import { User, UserWithPassword } from '../../../../../types/User';
import { toast } from '../../../../../utils/toast';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigátorio'),
  username: z.string().nonempty('Username é obrigátorio'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
  role: z.enum(['admin', 'garcom', 'cozinha']),
});

type formData = z.infer<typeof schema>;

interface userUserFormProps {
  onSubmit: (user: Omit<UserWithPassword, 'id'>) => Promise<void>;
  user?: User;
}

export function useUserForm({ onSubmit, user }: userUserFormProps) {
  const schemaMerged = usePasswordSchema({ schema, isData: !!user });

  const {
    control,
    register,
    handleSubmit: RHFHandleSubmit,
    formState: { errors, isValid, isDirty },
    setError,
  } = useForm<formData>({
    resolver: zodResolver(schemaMerged),
    defaultValues: {
      name: user?.name,
      username: user?.username,
      password: '',
      role: user?.role,
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
      const message = errorsMessagesUsers[error.response?.data.message];

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
    control,
  };
}
