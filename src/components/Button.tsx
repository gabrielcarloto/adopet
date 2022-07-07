import { Link } from 'react-router-dom';

interface ButtonProps {
  size: 'md' | 'lg';
  text: string;
  as?: 'button' | 'a';
  href?: string;
}

export default function Button({
  size,
  text,
  as = 'button',
  href,
}: ButtonProps) {
  const width =
    size === 'md'
      ? 'w-[148px] md:w-[164px] xl:w-[174px]'
      : 'w-[180px] md:w-[344px] xl:w-[362px]';

  const classes = `bg-brand-tertiary hover:bg-brand-coral-100 focus:ring-2 focus:ring-brand-tertiary ring-offset-2 outline-none transition-colors h-10 md:h-12 grid place-items-center rounded-md text-white text-base md:text-lg font-semibold ${width}`;

  if (as === 'a') {
    return (
      <Link className={classes} to={href!}>
        {text}
      </Link>
    );
  } else {
    return <button className={classes}>{text}</button>;
  }
}
