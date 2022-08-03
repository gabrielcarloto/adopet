import { useAuth } from '../contexts/auth';
import Button from '../components/Button';
import { UserIcon } from '../components/Icons';
import Input from '../components/Input';
import Main from '../components/Main';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { user } = useAuth();

  const {
    register,
    // formState: { errors },
  } = useForm();

  return (
    <Main className="mb-4 md:mb-[91px] xl:mb-8 px-6 md:px-[122px] xl:px-[444px] items-center">
      <h1 className="md:text-lg text-brand-primary text-center max-w-[226px] md:max-w-full xl:max-w-[90%]">
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
        mensagem.
      </h1>

      <form className="w-full px-4 py-8 xl:px-[30px] mt-6 md:mt-10 rounded-[10px] grid gap-8 place-items-center bg-brand-gray-50">
        <h2 className="font-semibold text-[21px] text-brand-gray-500">
          Perfil
        </h2>
        <div className="w-full grid gap-4">
          <Input
            type="file"
            accept="image/png, image/jpeg"
            label="Foto"
            labelPosition="start"
            labelColor="brand-primary"
            {...register('picture')}
          >
            {user.picture ? (
              <img
                className="rounded-full w-20 md:w-32 xl:w-40 aspect-square"
                src={user.picture as string}
                alt="Foto de perfil"
              />
            ) : (
              <UserIcon
                className="w-20 md:w-32 xl:w-40"
                aria-label="Ícone do usuário"
              />
            )}
          </Input>
          <Input
            label="Nome"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder={user.name}
            {...register('name')}
          />
          <Input
            as="textarea"
            label="Sobre"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Escreva um pouco sobre você"
            {...register('about')}
          />
        </div>
        <Button size="md" text="Salvar" />
      </form>
    </Main>
  );
}
