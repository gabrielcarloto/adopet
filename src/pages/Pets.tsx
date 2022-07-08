import Pet from '../components/Pet';

export default function Pets() {
  const array = Array.from(Array(9));

  return (
    <main className="flex-auto flex flex-col m-header md:pb-8 xl:pb-[60px] container">
      <h1 className="mx-auto mb-8 xl:mb-10 max-w-[226px] md:max-w-[373px] xl:max-w-full text-brand-primary text-center md:text-lg">
        Olá! Veja os amigos disponíveis para adoção!
      </h1>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {array.map(() => (
          <Pet />
        ))}
      </section>
    </main>
  );
}
