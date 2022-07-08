import { CSSProperties, InputHTMLAttributes, useId, useState } from 'react';
import { LottieOptions, useLottie } from 'lottie-react';
import classNames from 'classnames';

import visibilityAnimation from '../assets/visibility.json';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: 'textarea' | 'input';
  height?: 'md' | 'lg';
  label: string;
  labelPosition?: 'start' | 'center';
  labelColor?: 'brand-primary' | 'brand-gray-500';
  backgroundColor?: 'white' | 'brand-gray-50';
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
  as = 'input',
  type = 'text',
  height = 'md',
  labelPosition = 'center',
  labelColor = 'brand-gray-500',
  backgroundColor = 'brand-gray-50',
  ...props
}: InputProps) {
  const [isPassVisible, setIsPassVisible] = useState<null | boolean>(
    type === 'password' ? false : null,
  );

  const inputId = useId();

  const LottieVisibility = useLottie(lottieOptions, lottieStyle);

  const isTextarea = as === 'textarea';
  const isTextOrEmail = type === 'text' || type === 'email';
  const isPassword = isPassVisible || isPassVisible === false;
  const isLabelLeft = labelPosition === 'start';
  const isBgWhite = backgroundColor === 'white';

  const As = as;

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
    <div
      className={classNames('flex flex-col gap-2', {
        [`items-${labelPosition}`]: labelPosition,
      })}
    >
      <label
        className={classNames('text-base md:text-lg xl:font-semibold', {
          [`text-${labelColor}`]: labelColor,
        })}
        htmlFor={inputId}
      >
        {props.label}
      </label>
      <div
        className={classNames('relative grid place-items-center', {
          'w-full': isLabelLeft,
          'xl:w-[552px]': isTextOrEmail && !isLabelLeft,
          'xl:w-[362px]': !isTextOrEmail && !isPassword && !isLabelLeft,
        })}
      >
        <As
          className={classNames(
            [
              'w-full rounded-md shadow-sm placeholder:text-xs md:placeholder:text-sm',
              'xl:placeholder:text-base placeholder:text-brand-gray-300 focus:ring-2',
              'focus:ring-brand-primary ring-offset-2 outline-none',
            ],
            {
              [`bg-${backgroundColor}`]: backgroundColor,
              [isTextarea
                ? 'min-h-[172px] resize-none'
                : height === 'md'
                ? 'h-10'
                : 'h-12']: as,
              [`text-brand-gray-${isBgWhite ? '300' : '500'}`]: isBgWhite,
              [`text-${isLabelLeft ? 'left' : 'center'}`]: labelPosition,
              'p-2 xl:p-3': !isPassword,
              'pl-2 pr-10 xl:pl-3 xl:pr-12 w-[calc(100%-32px)] xl:w-[318px]':
                isPassword,
            },
          )}
          id={inputId}
          type={isPassword ? (isPassVisible ? 'text' : 'password') : type}
          {...props}
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
