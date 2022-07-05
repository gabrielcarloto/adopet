import Logo from '../components/Logo';
import Button from '../components/Button';

import CatAndDog from '../assets/cat-and-dog.png';

export default function Home() {
  return (
    <main className="w-full mt-24 md:mt-48 xl:mt-7 flex flex-col items-center gap-6 md:gap-10 text-white">
      <h1>
        <Logo variant="cream" />
      </h1>

      <div className="grid gap-4 place-items-center max-w-[250px] md:max-w-[360px] xl:max-w-[488px]">
        <h3 className="font-medium text-[26px] md:text-[28px]">Boas-vindas!</h3>
        <p className="text-base md:text-lg text-center leading-6 md:leading-[26px]">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>
      </div>

      <div className="grid gap-6 md:gap-4">
        <Button text="Já tenho conta" size="lg" />
        <Button text="Quero me cadastrar" size="lg" as="a" href="/cadastro" />
      </div>

      <img
        className="w-64 md:w-72"
        src={CatAndDog}
        alt="Gato e cachorro com corações acima deles"
      />
    </main>
  );
}
