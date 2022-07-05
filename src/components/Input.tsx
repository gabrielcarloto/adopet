import classNames from 'classnames';
import { HTMLInputTypeAttribute, useId } from 'react';

interface InputProps {
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export default function Input({
  type,
  label,
  placeholder,
  required = false,
  minLength,
  maxLength,
}: InputProps) {
  const inputId = useId();

  const isTextOrEmail = type === 'text' || type === 'email';

  return (
    <div className="flex flex-col items-center gap-2">
      <label
        className="text-base md:text-lg xl:font-semibold text-brand-gray-500"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className={classNames(
          [
            'w-full h-10 p-2 rounded-md bg-brand-gray-50 shadow-sm text-brand-gray-500 text-center',
            'placeholder:text-center placeholder:text-xs md:placeholder:text-sm xl:placeholder:text-base',
            'placeholder:text-brand-gray-300 xl:p-3',
          ],
          {
            'xl:w-[552px]': isTextOrEmail,
            'xl:w-[362px]': !isTextOrEmail,
          },
        )}
        id={inputId}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
}
