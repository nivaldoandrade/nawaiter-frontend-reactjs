import { z } from 'zod';

interface UseSchemaProps {
  schema: z.AnyZodObject;
  isData: boolean;
}

export function usePasswordSchema({ schema, isData }: UseSchemaProps) {
  const schemaWithoutPassword = z.object({
    password: z
      .string()
      .refine((val) => val === '' || val.length >= 8, {
        message: 'A senha deve ter pelo menos 8 caracteres',
      })
      .transform((val) => (val === '' ? null : val)),
  });

  const schemaMerged = isData ? schema.merge(schemaWithoutPassword) : schema;

  return schemaMerged;
}
