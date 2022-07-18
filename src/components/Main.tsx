import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export default function Main({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      id="main-content"
      className={classNames('flex-auto m-header flex flex-col', {
        [className as string]: className,
      })}
    >
      {children}
    </main>
  );
}
