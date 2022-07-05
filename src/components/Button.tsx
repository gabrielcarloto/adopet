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
      className={`bg-brand-tertiary h-10 md:h-12 rounded-md text-white text-base md:text-lg font-semibold ${width}`}
    >
      {text}
    </button>
  );
}
