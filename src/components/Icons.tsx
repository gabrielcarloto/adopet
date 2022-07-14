import { useEffect, useState } from 'react';
import classNames from 'classnames';
import useOnclickOutside from 'react-cool-onclickoutside';

interface IconProps {
  className?: string;
  'aria-label': string;
}

export function HomeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 23V7.66667L9.66 0L19.2 7.66667V23H12.18V13.8958H6.99V23H0ZM1.8 21.0833H5.19V11.9792H13.98V21.0833H17.4V8.625L9.66 2.39583L1.8 8.625V21.0833Z"
        fill="white"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.54206 19.0073C2.07928 19.0073 1.67435 18.8304 1.32727 18.4767C0.980182 18.1231 0.806641 17.7104 0.806641 17.2388V1.91247C0.806641 1.44089 0.980182 1.02826 1.32727 0.674571C1.67435 0.320886 2.07928 0.144043 2.54206 0.144043H22.2101C22.6729 0.144043 23.0778 0.320886 23.4249 0.674571C23.772 1.02826 23.9455 1.44089 23.9455 1.91247V17.2388C23.9455 17.7104 23.772 18.1231 23.4249 18.4767C23.0778 18.8304 22.6729 19.0073 22.2101 19.0073H2.54206ZM12.3761 10.1062L2.54206 3.53353V17.2388H22.2101V3.53353L12.3761 10.1062ZM12.3761 8.33776L22.0944 1.91247H2.68668L12.3761 8.33776ZM2.54206 3.53353V1.91247V3.53353V17.2388V3.53353Z"
        fill="white"
      />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#36D6AD" />
      <path
        d="M20.5 17C19.0411 17 17.6423 16.4205 16.6109 15.3891C15.5794 14.3577 15 12.9588 15 11.5C15 10.0411 15.5794 8.64228 16.6109 7.61085C17.6423 6.57943 19.0411 6 20.5 6C21.9588 6 23.3577 6.57943 24.3891 7.61085C25.4205 8.64228 26 10.0411 26 11.5C25.9982 12.9583 25.4183 14.356 24.3874 15.3874C23.356 16.4183 21.9583 16.9988 20.5 17ZM20.5 7C19.3063 7 18.1617 7.47428 17.3177 8.31828C16.4737 9.16228 16 10.3068 16 11.5C16 12.6931 16.4743 13.8383 17.3177 14.6817C18.1617 15.5257 19.3063 16 20.5 16C21.6937 16 22.8377 15.5257 23.6817 14.6817C24.5257 13.8377 25 12.6931 25 11.5C24.9988 10.3068 24.524 9.16285 23.6805 8.31942C22.8371 7.47599 21.6931 7.00114 20.5 7Z"
        fill="#36D6AD"
      />
      <path
        d="M30.2645 31H10.7354C10.3297 30.9994 10.0006 30.6702 10 30.2645V28.5C10 25.7154 11.1063 23.0446 13.0754 21.0754C15.0446 19.1063 17.7154 18 20.5 18C23.2845 18 25.9554 19.1063 27.9245 21.0754C29.8936 23.0446 30.9999 25.7154 30.9999 28.5V30.2645C30.9994 30.6702 30.6702 30.9994 30.2645 31ZM11 30H29.9999V28.5C29.9999 25.9805 28.9994 23.564 27.2177 21.7828C25.4359 20.0011 23.02 19 20.5005 19C17.9811 19 15.5646 20.0011 13.7828 21.7828C12.0011 23.5646 11.0006 25.9805 11.0006 28.5V30H11Z"
        fill="#36D6AD"
      />
    </svg>
  );
}

interface UnfoldIconProps extends IconProps {
  isOpen: boolean;
}

export function UnfoldIcon(props: UnfoldIconProps) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (props.isOpen) setIsClicked(true);
  }, [props.isOpen]);

  const ref = useOnclickOutside(() => setIsClicked(false), {
    ignoreClass: 'ignore-onclick-outside',
  });

  return (
    <div
      className={`group ${props.className}`}
      aria-label={props['aria-label']}
      onClick={() => setIsClicked(!isClicked)}
      ref={ref}
    >
      <svg
        className={classNames('transform transition-transform ease-in-out', {
          'group-hover:-translate-y-[2px] duration-200': !isClicked,
          'translate-y-[10px] duration-300 group-hover:translate-y-4':
            isClicked,
        })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 11.2"
      >
        <g>
          <g>
            <polygon
              points="2.2 11.2 0 9 9 0 18 9 15.8 11.2 9 4.4 2.2 11.2"
              fill="#999999"
            />
          </g>
        </g>
      </svg>
      <svg
        className={classNames(
          'rotate-180 mt-2 transform transition-transform ease-in-out',
          {
            'group-hover:translate-y-[2px] duration-200': !isClicked,
            '-translate-y-[10px] rotate-180 duration-300 group-hover:-translate-y-4':
              isClicked,
          },
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 11.2"
      >
        <g>
          <g>
            <polygon
              points="2.2 11.2 0 9 9 0 18 9 15.8 11.2 9 4.4 2.2 11.2"
              fill="#999999"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
