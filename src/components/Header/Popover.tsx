import { Popover as HeadlessUIPopover, Transition } from '@headlessui/react';
import { ReactNode, SyntheticEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {
  altKey: boolean;
  /** @deprecated */
  charCode: number;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  key: string;
  /** @deprecated */
  keyCode: number;
  locale: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  /** @deprecated */
  which: number;
}

interface PopoverProps {
  label: string;
  to: string;
  children: ReactNode;
}

export default function Popover({ label, to, children }: PopoverProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => setIsPanelOpen(false), [location]);

  return (
    <HeadlessUIPopover
      className="relative"
      onMouseEnter={() => setIsPanelOpen(true)}
      onMouseLeave={() => setIsPanelOpen(false)}
      onFocus={() => setIsPanelOpen(true)}
      onBlur={() => setIsPanelOpen(false)}
    >
      <HeadlessUIPopover.Button
        onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
          /**
           * for some reason, depending on where the Link component is,
           * it either stops working when clicked or when pressing enter,
           * so I did this workaround
           */
          if (e.key === 'Enter') navigate(to);
        }}
        onClick={() => navigate(to)}
      >
        {children}
      </HeadlessUIPopover.Button>

      <Transition
        show={isPanelOpen}
        enter="transition-all duration-150"
        enterFrom="opacity-0 absolute top-0 rotate-y-40"
        enterTo="opacity-100 absolute top-0 rotate-y-0"
        leave="transition-all duration-150"
        leaveFrom="opacity-100 absolute top-0 rotate-y-0"
        leaveTo="opacity-0 absolute top-0 rotate-y-40"
      >
        <HeadlessUIPopover.Panel
          className="w-max p-1 absolute left-0 top-7 bg-white shadow-lg text-brand-gray-500 text-sm rounded"
          static
        >
          <Link to={to}>{label}</Link>
        </HeadlessUIPopover.Panel>
      </Transition>
    </HeadlessUIPopover>
  );
}
