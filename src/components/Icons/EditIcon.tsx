import Svg, { IconProps } from './index';

export function EditIcon({ className }: IconProps) {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.293 23.619L23.619 13.293C24.009 12.903 24.642 12.903 25.032 13.293L26.708 14.969C27.098 15.359 27.098 15.992 26.708 16.382L16.381 26.707C16.194 26.895 15.94 27 15.675 27H13V24.325C13 24.06 13.105 23.806 13.293 23.619Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.75 15.1599L24.84 18.2499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
