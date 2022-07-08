import Button from '../components/Button';
import Input from '../components/Input';

export default function Contact() {
  return (
    <main className="flex-auto m-header mb-4 md:mb-[91px] xl:mb-8 px-6 md:px-[122px] xl:px-[444px] flex flex-col items-center">
      <h1 className="md:text-lg text-brand-primary text-center max-w-[226px] md:max-w-full xl:max-w-[90%]">
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
      </h1>

      <form className="w-full px-4 py-8 xl:px-[30px] mt-6 md:mt-10 rounded-[10px] grid gap-8 place-items-center bg-brand-gray-50">
        <div className="w-full grid gap-4">
          <Input
            label="Nome"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Insira seu nome completo"
            required
          />
          <Input
            type="tel"
            label="Telefone"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Insira seu telefone e/ou whatsapp"
            required
          />
          <Input
            label="Nome do animal"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Por qual animal você se interessou?"
            required
          />
          <Input
            as="textarea"
            backgroundColor="white"
            label="Mensagem"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Escreva sua mensagem."
            required
          />
        </div>
        <Button size="md" text="Enviar" />
      </form>
    </main>
  );
}
