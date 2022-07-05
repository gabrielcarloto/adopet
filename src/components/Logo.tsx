import classNames from 'classnames';
import LogoBlue from '../assets/logo-blue.svg';
import LogoCream from '../assets/logo-cream.svg';

interface LogoProps {
  variant: 'cream' | 'blue';
  classes?: string;
}

export default function Logo({ variant, classes }: LogoProps) {
  const source = variant === 'cream' ? LogoCream : LogoBlue;

  return (
    <img
      className={classNames({
        'w-48 md:w-64 xl:w-[260px] md:mt-2': !classes,
        [classes!]: classes,
      })}
      src={source}
      alt="Logo da adopet"
    />
  );
}
