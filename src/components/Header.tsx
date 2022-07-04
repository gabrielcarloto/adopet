import { Popover, Transition } from '@headlessui/react';
import { useState } from 'react';

import LogoCream from '../assets/logo-cream.svg';
import Home from '../assets/home.svg';
import Mail from '../assets/mail.svg';

export default function Header() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);

  return (
    <header className="w-full mt-12 md:mt-16 flex items-center text-white">
      <button>
        <img
          className="hidden md:block w-32 ml-12 xl:ml-40"
          src={LogoCream}
          alt="Logo da adopet. Voltar à página inicial"
        />
      </button>
      <div className="ml-12 flex gap-14 md:gap-16 xl:gap-8">
        <Popover className="relative">
          <Popover.Button
            onMouseEnter={() => setIsHomeOpen(true)}
            onMouseLeave={() => setIsHomeOpen(false)}
            onFocus={() => setIsHomeOpen(true)}
            onBlur={() => setIsHomeOpen(false)}
          >
            <img className="h-[23px]" src={Home} />
          </Popover.Button>

          <Transition show={isHomeOpen}>
            <Popover.Panel
              className="w-min p-1 absolute left-0 top-7 bg-white shadow-lg text-brand-gray-500 text-sm rounded"
              onFocus={() => setIsHomeOpen(true)}
              onBlur={() => setIsHomeOpen(false)}
              static
            >
              <a href="/">Início</a>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Popover className="relative">
          <Popover.Button
            onMouseEnter={() => setIsMailOpen(true)}
            onMouseLeave={() => setIsMailOpen(false)}
            onFocus={() => setIsMailOpen(true)}
            onBlur={() => setIsMailOpen(false)}
          >
            <img className="h-[23px]" src={Mail} />
          </Popover.Button>

          <Transition show={isMailOpen}>
            <Popover.Panel
              className="w-min p-1 absolute left-0 top-7 bg-white shadow-lg text-brand-gray-500 text-sm rounded"
              onFocus={() => setIsMailOpen(true)}
              onBlur={() => setIsMailOpen(false)}
              static
            >
              <a href="#">Mensagens</a>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
}
