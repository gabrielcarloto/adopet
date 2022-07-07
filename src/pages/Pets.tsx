import Pet from '../components/Pet';

export default function Pets() {
  return (
    <main className="flex-auto flex flex-col pt-[72px] md:pt-[188px] md:pb-8 xl:pt-[102px] xl:pb-[60px] container">
      <h1 className="mx-auto mb-8 xl:mb-10 max-w-[226px] md:max-w-[373px] xl:max-w-full text-brand-primary md:text-lg">
        Olá! Veja os amigos disponíveis para adoção!
      </h1>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
        <Pet />
      </section>
    </main>
  );
}
