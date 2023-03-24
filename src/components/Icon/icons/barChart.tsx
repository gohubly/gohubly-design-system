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
        d="M15 16.6668V8.3335M10 16.6668V3.3335M5 16.6668V11.6668"
        stroke="#262626"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
