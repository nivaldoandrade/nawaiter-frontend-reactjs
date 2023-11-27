import Svg, { IconProps } from './index';

export function UserIcon({ className }: IconProps) {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="7.99835"
        cy="9.00854"
        r="3.49145"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="17.0021"
        cy="9.99897"
        r="2.50104"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.99585 20.5033V19.4859C1.99585 17.285 3.77959 15.5012 5.98051 15.5012H10.0162C12.2171 15.5012 14.0008 17.285 14.0008 19.4859V20.5033"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0021 15.5012H18.1045C20.3055 15.5012 22.0892 17.285 22.0892 19.4859V20.5033"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
