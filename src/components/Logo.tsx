import LogoBlue from '../assets/logo-blue.svg';
import LogoCream from '../assets/logo-cream.svg';

interface LogoProps {
  variant: 'cream' | 'blue';
}

export default function Logo({ variant }: LogoProps) {
  const source = variant === 'cream' ? LogoCream : LogoBlue;

  return (
    <img
      className="w-48 md:w-64 xl:w-[260px] md:mt-2"
      src={source}
      alt="Logo da adopet"
    />
  );
}
