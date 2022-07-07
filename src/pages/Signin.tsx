import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';

export default function Signin() {
  return (
    <main className="flex-auto m-header flex flex-col gap-12 md:gap-10 xl:gap-20 items-center">
      <h1>
        <Logo variant="blue" />
      </h1>

      <div className="text-brand-primary text-center text-base md:text-lg font-normal leading-5 grid gap-2 max-w-xs md:max-w-[525px] xl:max-w-[552px]">
        <p>Já tem conta? Faça seu login:</p>
      </div>

      <form className="grid place-items-center gap-6">
        <Input label="Email" type="email" placeholder="Insira seu email" />
        <div className="grid place-items-center gap-4">
          <Input label="Senha" type="password" placeholder="Insira sua senha" />
          <a href="#" className="underline text-brand-tertiary">
            Esqueci minha senha
          </a>
        </div>
        <Button text="Entrar" size="md" />
      </form>
    </main>
  );
}
