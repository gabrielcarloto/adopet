import { Transition } from '@headlessui/react';
import { ReactNode, useEffect, useId, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface PopoverProps {
  label: string;
  to: string;
  children: ReactNode;
}

export default function Popover({ label, to, children }: PopoverProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const panelId = useId();

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => setIsPanelOpen(false), [location]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPanelOpen(true)}
      onMouseLeave={() => setIsPanelOpen(false)}
      onFocus={() => {
        setIsPanelOpen(true);
      }}
      onBlur={() => setIsPanelOpen(false)}
      aria-controls={`popover-panel-${panelId}`}
    >
      <Link
        onKeyDown={(e) => e.key === ' ' && navigate(to)}
        to={to}
        title={label}
      >
        {children}
      </Link>

      <Transition
        show={isPanelOpen}
        enter="transition-all duration-150"
        enterFrom="opacity-0 absolute top-0 rotate-y-40"
        enterTo="opacity-100 absolute top-0 rotate-y-0"
        leave="transition-all duration-150"
        leaveFrom="opacity-100 absolute top-0 rotate-y-0"
        leaveTo="opacity-0 absolute top-0 rotate-y-40"
      >
        <div
          id={`popover-panel-${panelId}`}
          className="w-max p-1 absolute left-0 top-7 bg-white shadow-lg text-brand-gray-500 text-sm rounded flex flex-col gap-1"
        >
          <Link aria-hidden tabIndex={900} to={to}>
            {label}
          </Link>
        </div>
      </Transition>
    </div>
  );
}
