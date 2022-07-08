import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Dunga from '../assets/dunga.png';

interface PetProps {
  name?: string;
  image?: string;
  description?: {
    age: number;
    size: string;
    behaviour: string;
  };
  location?: string;
}

export default function Pet({
  name = 'Dunga',
  image = Dunga,
  description = { age: 2, size: 'pequeno', behaviour: 'Calmo e educado' },
  location = 'Rio de Janeiro (RJ)',
}: PetProps) {
  return (
    <Link
      className={classNames(
        'w-full p-4 group bg-brand-gray-50 grid grid-cols-2 grid-flow-row gap-4 text-sm',
        'text-brand-gray-500 focus:text-zinc-600 hover:text-zinc-600 focus:ring-2',
        'focus:ring-brand-primary ring-offset-2 hover:shadow-md outline-none transition-all',
        'transform hover:-translate-y-1',
      )}
      to="#"
    >
      <img
        className="col-span-1 row-span-2 self-center justify-self-center"
        src={image}
        alt=""
      />

      <div className="grid gap-2">
        <strong className="text-base text-brand-primary font-semibold">
          {name}
        </strong>
        <div className="leading-5">
          <p>{description.age} anos</p>
          <p>Porte {description.size}</p>
          <p>{description.behaviour}</p>
        </div>
      </div>

      <footer className="grid gap-2">
        <p className="text-xs">{location}</p>
        <button
          className={classNames(
            'group p-1 rounded flex gap-2 text-[10px] xl:group-hover:font-bold xl:hover:font-bold',
            'xl:group-focus:font-bold xl:focus:font-bold group-focus:bg-brand-secondary focus:text-white',
            'focus:ring-2 focus:ring-brand-primary ring-offset-1 outline-none group-hover:bg-brand-secondary',
            ' focus:bg-brand-secondary group-hover:text-brand-gray-50 group-focus:text-brand-gray-50 transition-all',
          )}
          type="button"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.085 8.0325C5.34 8.0325 5.55375 7.94625 5.72625 7.77375C5.89875 7.60125 5.985 7.3875 5.985 7.1325C5.985 6.8775 5.89875 6.66375 5.72625 6.49125C5.55375 6.31875 5.34 6.2325 5.085 6.2325C4.83 6.2325 4.61625 6.31875 4.44375 6.49125C4.27125 6.66375 4.185 6.8775 4.185 7.1325C4.185 7.3875 4.27125 7.60125 4.44375 7.77375C4.61625 7.94625 4.83 8.0325 5.085 8.0325ZM9.0675 8.0325C9.3225 8.0325 9.53625 7.94625 9.70875 7.77375C9.88125 7.60125 9.9675 7.3875 9.9675 7.1325C9.9675 6.8775 9.88125 6.66375 9.70875 6.49125C9.53625 6.31875 9.3225 6.2325 9.0675 6.2325C8.8125 6.2325 8.59875 6.31875 8.42625 6.49125C8.25375 6.66375 8.1675 6.8775 8.1675 7.1325C8.1675 7.3875 8.25375 7.60125 8.42625 7.77375C8.59875 7.94625 8.8125 8.0325 9.0675 8.0325ZM12.8925 8.0325C13.1475 8.0325 13.3612 7.94625 13.5337 7.77375C13.7063 7.60125 13.7925 7.3875 13.7925 7.1325C13.7925 6.8775 13.7063 6.66375 13.5337 6.49125C13.3612 6.31875 13.1475 6.2325 12.8925 6.2325C12.6375 6.2325 12.4237 6.31875 12.2513 6.49125C12.0787 6.66375 11.9925 6.8775 11.9925 7.1325C11.9925 7.3875 12.0787 7.60125 12.2513 7.77375C12.4237 7.94625 12.6375 8.0325 12.8925 8.0325ZM0 18V1.35C0 1.005 0.135 0.69375 0.405 0.41625C0.675 0.13875 0.99 0 1.35 0H16.65C16.995 0 17.3062 0.13875 17.5837 0.41625C17.8612 0.69375 18 1.005 18 1.35V13.05C18 13.395 17.8612 13.7063 17.5837 13.9838C17.3062 14.2612 16.995 14.4 16.65 14.4H3.6L0 18ZM1.35 14.7375L3.0375 13.05H16.65V1.35H1.35V14.7375ZM1.35 1.35V13.05V14.7375V1.35Z"
              className="fill-brand-secondary group-focus:fill-current group-hover:fill-current"
            />
          </svg>
          <span>Falar com o responsável</span>
        </button>
      </footer>
    </Link>
  );
}
