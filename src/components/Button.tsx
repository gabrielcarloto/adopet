import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonRequiredProps {
  size: 'md' | 'lg';
  text: string;
}

interface ButtonOptionalProps {
  as?: 'a';
  href?: string;
}

type ButtonProps = ButtonRequiredProps & ButtonOptionalProps;

export default function Button({
  size,
  text,
  ...props
}: ButtonRequiredProps & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element;
export default function Button({
  size,
  text,
  as,
  href,
  ...props
}: ButtonRequiredProps & {
  as?: 'a';
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element;
export default function Button({
  size,
  text,
  as,
  href,
  ...props
}: ButtonProps) {
  const width =
    size === 'md'
      ? 'w-[148px] md:w-[164px] xl:w-[174px]'
      : 'w-[180px] md:w-[344px] xl:w-[362px]';

  const classes = `bg-brand-tertiary hover:bg-brand-coral-100 focus:ring-2 focus:ring-brand-tertiary ring-offset-2 outline-none transition-colors h-10 md:h-12 grid place-items-center rounded-md text-white text-base md:text-lg font-semibold ${width}`;

  if (as === 'a') {
    return (
      <Link {...props} className={classes} to={href!}>
        {text}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {text}
    </button>
  );
}
