import Svg, { IconProps } from './index';

export function InfoIcon({ className }: IconProps) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99901 6.66675C9.88401 6.66675 9.79068 6.76008 9.79151 6.87508C9.79151 6.99008 9.88484 7.08341 9.99984 7.08341C10.1148 7.08341 10.2082 6.99008 10.2082 6.87508C10.2082 6.76008 10.1148 6.66675 9.99901 6.66675Z"
        fill="none"
      />
      <path
        d="M9.99901 6.66675C9.88401 6.66675 9.79068 6.76008 9.79151 6.87508C9.79151 6.99008 9.88484 7.08341 9.99984 7.08341C10.1148 7.08341 10.2082 6.99008 10.2082 6.87508C10.2082 6.76008 10.1148 6.66675 9.99901 6.66675"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10V14.1667M10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
