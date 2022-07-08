import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import Popover from './Popover';

import { HomeIcon, MailIcon, UserIcon } from '../Icons';
import Logo from '../Logo';

export default function Header() {
  const location = useLocation();

  const isLoggedIn = true;
  const routesUserShouldNotAppear =
    location.pathname === '/' ||
    location.pathname === '/cadastro' ||
    location.pathname === '/login';

  const shouldUserBeVisible = isLoggedIn && !routesUserShouldNotAppear;

  return (
    <header className="w-screen max-w-full h-10 mt-12 md:mt-16 md:pl-12 xl:pl-40 flex flex-initial items-center text-white">
      <Popover label="Voltar à página inicial" to="/">
        <Logo variant="cream" className="hidden md:block w-32" />
      </Popover>

      <div className="ml-12 flex gap-14 md:gap-16 xl:gap-8">
        <Popover label="Ver pets disponíveis para adoção" to="/pets">
          <HomeIcon className="h-[23px]" aria-label="Pets" />
        </Popover>

        <Popover label="Ver mensagens" to="#">
          <MailIcon className="h-[23px]" aria-label="Mensagens" />
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
                <Link to="/perfil" className="p-1">
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
