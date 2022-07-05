import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';

import LogoCream from '../assets/logo-cream.svg';
import Home from '../assets/home.svg';
import Mail from '../assets/mail.svg';
import Logo from './Logo';

export default function Header() {
  const location = useLocation();

  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  useEffect(() => {
    setIsHomeOpen(false);
    setIsMailOpen(false);
  }, [location]);

  return (
    <header className="w-full mt-12 md:mt-16 flex items-center text-white">
      <Logo variant="cream" classes="hidden md:block w-32 ml-12 xl:ml-40" />
      <div className="ml-12 flex gap-14 md:gap-16 xl:gap-8">
        <Popover
          className="relative"
          onMouseEnter={() => setIsHomeOpen(true)}
          onMouseLeave={() => setIsHomeOpen(false)}
          onFocus={() => setIsHomeOpen(true)}
          onBlur={() => setIsHomeOpen(false)}
        >
          <Popover.Button>
            <Link to="/">
              <img className="h-[23px]" src={Home} alt="Início" />
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
              <Link to="/">Voltar à página inicial</Link>
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
              <img className="h-[23px]" src={Mail} alt="Mensagens" />
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
    </header>
  );
}
