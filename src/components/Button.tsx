interface ButtonProps {
  size: 'md' | 'lg';
  text: string;
}

export default function Button({ size, text }: ButtonProps) {
  const width =
    size === 'md'
      ? 'w-[148px] md:w-[164px] xl:w-[174px]'
      : 'w-[180px] md:w-[344px] xl:w-[362px]';

  return (
    <button
      className={`bg-brand-tertiary h-10 rounded-md text-base font-semibold ${width}`}
    >
      {text}
    </button>
  );
}
