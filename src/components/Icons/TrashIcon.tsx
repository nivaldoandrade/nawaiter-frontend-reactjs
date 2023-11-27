import Svg, { IconProps } from './index';

export function TrashIcon({ className }: IconProps) {
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
        d="M23.5429 29.0039H16.4571C15.2809 29.0039 14.303 28.0983 14.2128 26.9256L13.2472 14.3728H26.7528L25.7872 26.9256C25.697 28.0983 24.7191 29.0039 23.5429 29.0039V29.0039Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0033 14.3728H11.9966"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1863 10.9963H22.8137C23.4352 10.9963 23.9391 11.5002 23.9391 12.1218V14.3727H16.0609V12.1218C16.0609 11.5002 16.5647 10.9963 17.1863 10.9963Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9696 18.8748V24.5021"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0304 18.8748V24.5021"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
