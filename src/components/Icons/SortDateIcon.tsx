import Svg, { IconProps } from './index';

export function SortDateIcon({ className }: IconProps) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.9">
        <path
          d="M9.66738 12.0017V12.7513C9.66738 13.1342 9.4066 13.4676 9.03578 13.5603L7.36842 13.9772C6.8422 14.1086 6.33265 13.7104 6.33265 13.1682V9.00043L2.85987 5.52765C2.73449 5.40293 2.66446 5.23286 2.66446 5.05612V3.3314C2.66446 2.96325 2.96325 2.66446 3.3314 2.66446H12.6686C13.0368 2.66446 13.3356 2.96325 13.3356 3.3314V3.99835"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4101 10.1789L14.2566 7.33306C14.4634 7.1263 14.4634 6.79083 14.2566 6.58474L13.4169 5.74506C13.2102 5.53831 12.8747 5.53831 12.6686 5.74506L9.82276 8.59091C9.72338 8.69029 9.66736 8.82501 9.66736 8.96507V10.3343H11.0359C11.1767 10.3343 11.3107 10.2789 11.4101 10.1789Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Svg>
  );
}
