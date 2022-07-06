import { CSSProperties, HTMLInputTypeAttribute, useId, useState } from 'react';
import classNames from 'classnames';
import { LottieOptions, useLottie } from 'lottie-react';

import visibilityAnimation from '../assets/visibility.json';

interface InputProps {
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

const lottieStyle: CSSProperties = {
  height: 24,
};

const lottieOptions: LottieOptions = {
  animationData: visibilityAnimation,
  autoplay: false,
  loop: false,
};

export default function Input({
  type,
  label,
  placeholder,
  required = false,
  minLength,
  maxLength,
}: InputProps) {
  const [isPassVisible, setIsPassVisible] = useState<null | boolean>(
    type === 'password' ? false : null,
  );

  const inputId = useId();

  const LottieVisibility = useLottie(lottieOptions, lottieStyle);

  const isTextOrEmail = type === 'text' || type === 'email';
  const isPassword = isPassVisible || isPassVisible === false;

  function handleChangePassVisibility() {
    setIsPassVisible(!isPassVisible);

    LottieVisibility.play();
  }

  if (isPassVisible) {
    LottieVisibility.setDirection(1);
  } else {
    LottieVisibility.setDirection(-1);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <label
        className="text-base md:text-lg xl:font-semibold text-brand-gray-500"
        htmlFor={inputId}
      >
        {label}
      </label>
      <div className="relative grid place-items-center">
        <input
          className={classNames(
            [
              'h-10 rounded-md bg-brand-gray-50 shadow-sm text-brand-gray-500 text-center',
              'placeholder:text-center placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-base',
              'placeholder:text-brand-gray-300 focus:ring-2 focus:ring-brand-primary ring-offset-2',
              'outline-none',
            ],
            {
              'xl:w-[552px]': isTextOrEmail,
              'xl:w-[362px]': !isTextOrEmail && !isPassword,
              'p-2 xl:p-3': !isPassword,
              'pl-2 pr-10 xl:pl-3 xl:pr-12 w-[calc(100%-32px)] xl:w-[318px]':
                isPassword,
            },
          )}
          id={inputId}
          type={isPassword ? (isPassVisible ? 'text' : 'password') : type}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
        {isPassword && (
          <button
            className="absolute right-5 xl:right-1 top-2"
            type="button"
            onClick={handleChangePassVisibility}
            title={`Alterar a visibilidade da senha. Agora a senha está ${
              isPassVisible ? 'visível' : 'escondida'
            }`}
          >
            {LottieVisibility.View}
          </button>
        )}
      </div>
    </div>
  );
}
