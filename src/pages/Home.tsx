import Logo from '../components/Logo';
import Button from '../components/Button';

import CatAndDog from '../assets/cat-and-dog.png';
import Main from '../components/Main';

export default function Home() {
  return (
    <Main className="w-full items-center gap-6 md:gap-10 2xl:gap-0 justify-between text-white">
      <h1>
        <Logo variant="cream" />
      </h1>

      <div className="grid gap-4 place-items-center max-w-[250px] md:max-w-[360px] xl:max-w-[488px]">
        <h2 className="font-medium text-[26px] md:text-[28px]">Boas-vindas!</h2>
        <p className="text-base md:text-lg text-center leading-6 md:leading-[26px]">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>
      </div>

      <div className="grid gap-6 md:gap-4">
        <Button text="Já tenho conta" size="lg" as="a" href="/login" />
        <Button text="Quero me cadastrar" size="lg" as="a" href="/cadastro" />
      </div>

      <img
        className="w-64 md:w-72 aspect-[936/1229]"
        src={CatAndDog}
        alt="Gato e cachorro com corações acima deles"
      />
    </Main>
  );
}
