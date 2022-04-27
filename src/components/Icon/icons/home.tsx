import React from "react";

export default function Svg(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 9.3L12 3L20.25 9.3V19.2C20.25 19.6774 20.0568 20.1352 19.713 20.4728C19.3692 20.8104 18.9029 21 18.4167 21H5.58333C5.0971 21 4.63079 20.8104 4.28697 20.4728C3.94315 20.1352 3.75 19.6774 3.75 19.2V9.3Z"
        fill="#CDD2EB"
        stroke="#CDD2EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.25024 21V12H14.7502V21" fill="#425DC7" />
    </svg>
  );
}