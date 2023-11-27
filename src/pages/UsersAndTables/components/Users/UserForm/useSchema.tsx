import { z } from 'zod';

import { User } from '../../../../../types/User';

export function useSchema(user?: User) {
  const schemaDefault = z.object({
    name: z.string().nonempty('Nome é obrigátorio'),
    username: z.string().nonempty('Username é obrigátorio'),
    password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    role: z.enum(['admin', 'garcom', 'cozinha']),
  });

  const schemaWithoutPassword = z.object({
    password: z
      .string()
      .refine((val) => val === '' || val.length >= 8, {
        message: 'A senha deve ter pelo menos 8 caracteres',
      })
      .transform((val) => (val === '' ? null : val)),
  });

  const schema = user
    ? schemaDefault.merge(schemaWithoutPassword)
    : schemaDefault;

  return {
    schema,
    formData: {} as z.infer<typeof schemaDefault>,
  };
}
