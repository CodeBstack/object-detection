import React from 'react';

interface StarIconProps
  extends React.SVGProps<SVGSVGElement> {
  props?: any;
}

const MonitorIcon = ({
  ...props
}: StarIconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 8.9175V9.585C16.5 12.255 15.8325 12.915 13.17 12.915H4.83C2.1675 12.915 1.5 12.2475 1.5 9.585V4.83C1.5 2.1675 2.1675 1.5 4.83 1.5H6"
        stroke="#755AE2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12.915V16.5"
        stroke="#755AE2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5 9.75H16.5"
        stroke="#755AE2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.625 16.5H12.375"
        stroke="#755AE2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.395 7.0275H9.82501C8.79001 7.0275 8.44501 6.3375 8.44501 5.6475V3.0075C8.44501 2.1825 9.12001 1.5075 9.94501 1.5075H13.395C14.16 1.5075 14.775 2.1225 14.775 2.8875V5.6475C14.775 6.4125 14.16 7.0275 13.395 7.0275Z"
        stroke="#755AE2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.6825 5.94L14.775 5.3025V3.2325L15.6825 2.595C16.1325 2.2875 16.5 2.475 16.5 3.0225V5.52C16.5 6.0675 16.1325 6.255 15.6825 5.94Z"
        stroke="#755AE2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MonitorIcon;

export function MonitorIconSmall() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33335 3.96333V4.26C7.33335 5.44666 7.03669 5.74 5.85335 5.74H2.14669C0.963354 5.74 0.666687 5.44333 0.666687 4.26V2.14666C0.666687 0.963331 0.963354 0.666664 2.14669 0.666664H2.66669"
        stroke="white"
        stroke-width="0.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 5.74V7.33333"
        stroke="white"
        stroke-width="0.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.666687 4.33334H7.33335"
        stroke="white"
        stroke-width="0.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 7.33334H5.5"
        stroke="white"
        stroke-width="0.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.95336 3.12333H4.36669C3.90669 3.12333 3.75336 2.81666 3.75336 2.51V1.33666C3.75336 0.969998 4.05336 0.669998 4.42002 0.669998H5.95336C6.29336 0.669998 6.56669 0.943331 6.56669 1.28333V2.51C6.56669 2.85 6.29336 3.12333 5.95336 3.12333Z"
        stroke="white"
        stroke-width="0.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.96998 2.64L6.56665 2.35667V1.43667L6.96998 1.15334C7.16998 1.01667 7.33332 1.1 7.33332 1.34334V2.45334C7.33332 2.69667 7.16998 2.78 6.96998 2.64Z"
        stroke="white"
        stroke-width="0.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
