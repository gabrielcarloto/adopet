import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useAuth, User } from '../contexts/auth';
import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Main from '../components/Main';

const LOGIN_MUTATION = gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      id
      name
      picture
      username
    }
  }
`;

interface LoginMutationResponse {
  login: User;
}

export default function Signin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [login, { error }] = useMutation<LoginMutationResponse>(
    LOGIN_MUTATION,
    {
      onCompleted(data) {
        if (!error && 'username' in data.login) {
          signIn(data.login);
          navigate('/pets');
        }
      },
    },
  );

  const handleSignIn = handleSubmit((data) =>
    login({
      variables: data,
    }),
  );

  return (
    <Main className="mb-40 gap-12 md:gap-10 xl:gap-20 items-center">
      <h1>
        <Logo variant="blue" />
      </h1>

      <div className="text-brand-primary text-center text-base md:text-lg font-normal leading-5 grid gap-2 max-w-xs md:max-w-[525px] xl:max-w-[552px]">
        <p>Já tem conta? Faça seu login:</p>
      </div>

      <form onSubmit={handleSignIn} className="grid place-items-center gap-6">
        <Input
          {...register('username')}
          label="Usuário"
          type="text"
          placeholder="Insira seu usuário"
        />
        <div className="grid place-items-center gap-4">
          <Input
            {...register('password')}
            label="Senha"
            type="password"
            placeholder="Insira sua senha"
          />
          <a href="#" className="underline text-brand-tertiary">
            Esqueci minha senha
          </a>
        </div>
        <Button type="submit" text="Entrar" size="md" />
      </form>
    </Main>
  );
}
