import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useAuth, User } from '../components/contexts/auth';
import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Main from '../components/Main';

const REGISTER_MUTATION = gql`
  mutation Register($userData: registerUserInput) {
    registerUser(userData: $userData) {
      id
      name
      picture
      username
    }
  }
`;

interface RegisterMutationResponse {
  registerUser: User;
}

export default function Signup() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [signUp, { error }] = useMutation<RegisterMutationResponse>(
    REGISTER_MUTATION,
    {
      onCompleted(data) {
        if (!error && 'username' in data.registerUser) {
          signIn(data.registerUser);
          navigate('/pets');
        }
      },
    },
  );

  const handleSignUp = handleSubmit((data) => {
    signUp({
      variables: { userData: data },
    });
  });

  return (
    <Main className="mb-[105px] md:mb-[185px] xl:mb-[150px] gap-6 md:gap-10 xl:gap-12 items-center">
      <h1>
        <Logo variant="blue" />
      </h1>

      <div className="text-brand-primary text-center text-base md:text-lg font-normal leading-5 grid gap-2 max-w-xs md:max-w-[525px] xl:max-w-[552px]">
        <p>Ainda não tem cadastro?</p>
        <p>
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </p>
      </div>

      <form
        onSubmit={handleSignUp}
        className="flex flex-col items-center gap-5 md:gap-6 mb-auto"
      >
        <Input
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          {...register('name', { required: true })}
        />
        <Input
          type="text"
          label="Usuário"
          placeholder="Escolha um usuário"
          {...register('username', { required: true })}
        />
        <Input
          type="password"
          label="Senha"
          placeholder="Crie uma senha"
          {...register('password', { required: true })}
        />
        <Input
          type="password"
          label="Confirme sua senha"
          placeholder="Repita a senha criada acima"
          {...register('password', { required: true })}
        />

        <Button type="submit" text="Cadastrar" size="md" />
      </form>
    </Main>
  );
}
