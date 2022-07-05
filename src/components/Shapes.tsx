import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function Shapes({ children }: { children: ReactNode }) {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isSignInOrUpPage =
    location.pathname === '/cadastro' || location.pathname === 'login';

  return (
    <div
      className={classNames(
        'w-screen max-w-full min-h-screen bg-shape-1 bg-no-repeat bg-350 md:bg-560',
        {
          'bg-brand-primary': isHomePage,
        },
      )}
    >
      <div
        className={classNames(
          'flex flex-col bg-no-repeat md:bg-shape-2 md:bg-right-top-15 xl:bg-right-top-12 md:bg-110',
          {
            'bg-shape-2 bg-right-top-12': isHomePage,
            'bg-shape-3 bg-left-bottom bg-80': isSignInOrUpPage,
          },
        )}
      >
        <div
          className={classNames({
            'bg-paws bg-no-repeat bg-right-top bg-134 md:bg-190':
              isSignInOrUpPage,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
