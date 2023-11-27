import Svg, { IconProps } from './index';

export function ImageUploadIcon({ className }: IconProps) {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 21.5H6.5C4.843 21.5 3.5 20.157 3.5 18.5V6.5C3.5 4.843 4.843 3.5 6.5 3.5H18.5C20.157 3.5 21.5 4.843 21.5 6.5V18.5C21.5 20.157 20.157 21.5 18.5 21.5Z"
        stroke="CurrentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 17.9859L8.112 13.3739C8.503 12.9829 9.136 12.9829 9.526 13.3739L10.932 14.7799L15.509 10.2039C15.9 9.81289 16.533 9.81289 16.923 10.2039L21.5 14.7809"
        stroke="CurrentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.01517 7.90671C9.16161 8.05316 9.16161 8.29059 9.01517 8.43704C8.86872 8.58349 8.63128 8.58349 8.48483 8.43704C8.33839 8.29059 8.33839 8.05316 8.48483 7.90671C8.63128 7.76026 8.86872 7.76026 9.01517 7.90671"
        stroke="CurrentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
