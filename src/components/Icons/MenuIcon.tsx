import Svg, { IconProps } from './index';

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 14.5H11M15 17.5H12M7 3.5V21.5M6 21.5H18C19.1046 21.5 20 20.6046 20 19.5V5.5C20 4.39543 19.1046 3.5 18 3.5H6C4.89543 3.5 4 4.39543 4 5.5V19.5C4 20.6046 4.89543 21.5 6 21.5ZM15.5 9.5C15.5 10.6046 14.6046 11.5 13.5 11.5C12.3954 11.5 11.5 10.6046 11.5 9.5C11.5 8.39543 12.3954 7.5 13.5 7.5C14.6046 7.5 15.5 8.39543 15.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
