import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function Shapes({ children }: { children: ReactNode }) {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div
      className={classNames(
        'w-screen max-w-full min-h-screen bg-shape-1 bg-no-repeat bg-95% md:bg-560',
        {
          'bg-brand-primary': isHomePage,
        },
      )}
    >
      <div className="flex flex-col bg-shape-2 bg-no-repeat bg-right-top-12 md:bg-right-top-10 xl:bg-right-top-5 md:bg-134">
        {children}
      </div>
    </div>
  );
}
