import Button from '../components/Button';
import { UserIcon } from '../components/Icons';
import Input from '../components/Input';

export default function Contact() {
  const userHasPhoto = true;

  return (
    <main className="flex-auto m-header mb-4 md:mb-[91px] xl:mb-8 px-6 md:px-[122px] xl:px-[444px] flex flex-col items-center">
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
          >
            {userHasPhoto ? (
              <img
                className="rounded-full w-20 md:w-32 xl:w-40"
                src="https://github.com/gabrielcarloto.png"
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
            placeholder="Insira seu nome completo"
          />
          <Input
            type="tel"
            label="Telefone"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Insira seu telefone e/ou whatsapp"
          />
          <Input
            label="Cidade"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Insira a cidade onde mora"
          />
          <Input
            as="textarea"
            label="Sobre"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Escreva um pouco sobre você"
          />
        </div>
        <Button size="md" text="Salvar" />
      </form>
    </main>
  );
}
