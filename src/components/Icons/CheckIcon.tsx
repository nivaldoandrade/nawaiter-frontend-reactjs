import Svg, { IconProps } from './index';

export function CheckIcon({ className }: IconProps) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="11" cy="11" r="11" fill="currentColor" />
      <path
        d="M6.28589 11.7857L9.42875 14.9285L15.7145 7.85712"
        stroke="white"
        strokeWidth="1.22222"
      />
    </Svg>
  );
}
