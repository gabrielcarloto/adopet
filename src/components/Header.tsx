import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Popover, Transition } from '@headlessui/react';

import { HomeIcon, MailIcon, UserIcon } from './Icons';
import Logo from './Logo';

export default function Header() {
  const location = useLocation();

  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  useEffect(() => {
    setIsHomeOpen(false);
    setIsMailOpen(false);
  }, [location]);

  const isLoggedIn = true;
  const routesUserShouldNotAppear =
    location.pathname === '/' ||
    location.pathname === '/cadastro' ||
    location.pathname === '/login';

  const shouldUserBeVisible = isLoggedIn && !routesUserShouldNotAppear;

  return (
    <header className="w-full mt-12 md:mt-16 flex flex-initial items-center text-white">
      <Logo variant="cream" className="hidden md:block w-32 ml-12 xl:ml-40" />
      <div className="ml-12 flex gap-14 md:gap-16 xl:gap-8">
        <Popover
          className="relative"
          onMouseEnter={() => setIsHomeOpen(true)}
          onMouseLeave={() => setIsHomeOpen(false)}
          onFocus={() => setIsHomeOpen(true)}
          onBlur={() => setIsHomeOpen(false)}
        >
          <Popover.Button>
            <Link to="/pets">
              <HomeIcon className="h-[23px]" aria-label="Pets" />
            </Link>
          </Popover.Button>

          <Transition
            show={isHomeOpen}
            enter="transition-all duration-150"
            enterFrom="opacity-0 absolute top-0 rotate-y-40"
            enterTo="opacity-100 absolute top-0 rotate-y-0"
            leave="transition-all duration-150"
            leaveFrom="opacity-100 absolute top-0 rotate-y-0"
            leaveTo="opacity-0 absolute top-0 rotate-y-40"
          >
            <Popover.Panel
              className="w-max p-1 absolute left-0 top-7 bg-white shadow-lg text-brand-gray-500 text-sm rounded"
              static
            >
              <Link to="/pets">Ver amigos disponíveis para adoção</Link>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Popover
          className="relative"
          onMouseEnter={() => setIsMailOpen(true)}
          onMouseLeave={() => setIsMailOpen(false)}
          onFocus={() => setIsMailOpen(true)}
          onBlur={() => setIsMailOpen(false)}
        >
          <Popover.Button>
            <Link to="#">
              <MailIcon className="h-[23px]" aria-label="Mensagens" />
            </Link>
          </Popover.Button>

          <Transition
            show={isMailOpen}
            enter="transition-all duration-150"
            enterFrom="opacity-0 absolute top-0 rotate-y-40"
            enterTo="opacity-100 absolute top-0 rotate-y-0"
            leave="transition-all duration-150"
            leaveFrom="opacity-100 absolute top-0 rotate-y-0"
            leaveTo="opacity-0 absolute top-0 rotate-y-40"
          >
            <Popover.Panel
              className="w-max p-1 absolute left-0 top-7 bg-white shadow-lg text-brand-gray-500 text-sm rounded"
              static
            >
              <a href="#">Ver mensagens</a>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      {shouldUserBeVisible && (
        <Menu>
          <div className="relative flex-1 mr-10 xl:mr-44 grid place-items-end">
            <Menu.Button>
              <UserIcon className="w-10" aria-label="Usuário" />
            </Menu.Button>
            <Menu.Items className="absolute top-11 w-max rounded shadow-lg bg-white text-brand-primary text-sm flex flex-col items-center">
              <Menu.Item>
                <Link to="#" className="p-1">
                  Perfil
                </Link>
              </Menu.Item>
              {/* <hr className="w-full border-brand-primary" />
            <Link to="#" className="p-1">
              Outro link
            </Link> */}
            </Menu.Items>
          </div>
        </Menu>
      )}
    </header>
  );
}
