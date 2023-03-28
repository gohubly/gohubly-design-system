import React from "react";

export default function Svg(props: any) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83333 3.3335V16.6668M5.83333 16.6668L2.5 13.3335M5.83333 16.6668L9.16667 13.3335M14.1667 16.6668V3.3335M14.1667 3.3335L10.8333 6.66683M14.1667 3.3335L17.5 6.66683"
        stroke="#555555"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
