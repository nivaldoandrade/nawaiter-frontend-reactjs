import { EyeCloseIcon } from '../../components/Icons/EyeCloseIcon';
import { EyeIcon } from '../../components/Icons/EyeIcon';
import { InfoIcon } from '../../components/Icons/InfoIcon';
import { Input } from '../../components/Input';
import { SubmitButton } from '../../components/SubmitButton';

import { Container, Content, Error, Form, Header } from './styles';
import { useLogin } from './useLogin';

export function Login() {
  const {
    OnSubmit,
    register,
    errors,
    isLoading,
    signInMessageError,
    isFormValid,
    passwordShown,
    togglePassword,
  } = useLogin();

  return (
    <Container>
      <Content>
        <Header>
          <p>Bem-vindo(a) ao</p>
          <strong>
            NAWAITER
            <span>APP</span>
          </strong>
        </Header>

        <Form id="signup-form" onSubmit={OnSubmit}>
          <Input
            label="Usuário"
            type="text"
            placeholder="Seu usuário de acesso"
            error={errors.username?.message}
            {...register('username')}
          />
          <Input
            label="Senha"
            type={passwordShown ? 'text' : 'password'}
            placeholder="Informe sua senha"
            icon={!passwordShown ? EyeCloseIcon : EyeIcon}
            onClick={togglePassword}
            error={errors.password?.message}
            {...register('password')}
          />
        </Form>

        {signInMessageError && (
          <Error>
            <i>
              <InfoIcon />
            </i>
            {signInMessageError}
          </Error>
        )}

        <SubmitButton
          form="signup-form"
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || !isFormValid}
        >
          Entrar
        </SubmitButton>
      </Content>
    </Container>
  );
}
