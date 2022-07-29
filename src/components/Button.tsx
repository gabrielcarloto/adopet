import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonRequiredProps {
  size: 'sm' | 'md' | 'lg';
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
      : size === 'lg'
      ? 'w-[180px] md:w-[344px] xl:w-[362px]'
      : 'w-10 md:w-24 xl:w-24 h-7';

  const classes = `bg-brand-tertiary hover:bg-brand-coral-100 focus:ring-2 focus:ring-brand-tertiary ring-offset-2 outline-none transition-colors grid place-items-center rounded-md text-white text-base font-semibold ${width} ${
    size !== 'sm' && 'h-10 md:h-12 md:text-lg'
  }`;

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
