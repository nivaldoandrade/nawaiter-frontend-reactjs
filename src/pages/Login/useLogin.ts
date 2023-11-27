import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useAuth } from '../../hooks/useAuth';
import authService from '../../services/authService';

const schema = z
  .object({
    username: z.string().nonempty('Username é obrigátorio'),
    password: z
      .string()
      .nonempty('Senha é obrigátorio')
      .min(8, 'Senha deve conter pelo menos 8 dígitos'),
  })
  .required();

type FormData = z.infer<typeof schema>;

export function useLogin() {
  const [signInMessageError, setSignInMessageError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid: isFormValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation(
    (data: { username: string; password: string }) => authService.signin(data),
  );

  const OnSubmit = handleSubmit(async (data) => {
    setSignInMessageError('');

    try {
      const { accessToken } = await mutateAsync(data);

      signIn(accessToken);
      navigate('/', { replace: true });
    } catch (error) {
      setSignInMessageError('Usuário ou senha incorreta. Tente Novamente');
    }
  });

  const togglePassword = useCallback(() => {
    setPasswordShown((state) => !state);
  }, []);

  return {
    OnSubmit,
    register,
    errors,
    isLoading,
    signInMessageError,
    isFormValid,
    passwordShown,
    togglePassword,
  };
}
