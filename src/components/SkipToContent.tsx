import { ReactNode, useState } from 'react';
import classNames from 'classnames';

interface SkipToContentProps {
  skipTo: string;
  children?: ReactNode;
}

export default function SkipToContent({
  skipTo,
  children,
}: SkipToContentProps) {
  const [show, setShow] = useState(false);

  return (
    <a
      href={skipTo}
      className={classNames(
        'bg-brand-secondary absolute top-0 left-0 w-screen h-14 grid place-items-center text-lg font-bold underline text-[#1a0f74]',
        {
          '-translate-y-14': !show,
        },
      )}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children ? children : 'Pular para o conteúdo principal'} (pressione
      Enter)
    </a>
  );
}
