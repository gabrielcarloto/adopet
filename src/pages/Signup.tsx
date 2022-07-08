import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';

export default function Signup() {
  return (
    <main className="flex-auto m-header mb-[105px] md:mb-[185px] xl:mb-[150px] flex flex-col gap-6 md:gap-10 xl:gap-12 items-center">
      <h1>
        <Logo variant="blue" />
      </h1>

      <div className="text-brand-primary text-center text-base md:text-lg font-normal leading-5 grid gap-2 max-w-xs md:max-w-[525px] xl:max-w-[552px]">
        <p>Ainda não tem cadastro?</p>
        <p>
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </p>
      </div>

      <form className="flex flex-col items-center gap-5 md:gap-6 mb-auto">
        <Input
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          required
        />
        <Input
          type="email"
          label="Email"
          placeholder="Escolha seu melhor email"
          required
        />
        <Input
          type="password"
          label="Senha"
          placeholder="Crie uma senha"
          required
        />
        <Input
          type="password"
          label="Confirme sua senha"
          placeholder="Repita a senha criada acima"
          required
        />

        <Button text="Cadastrar" size="md" />
      </form>
    </main>
  );
}
