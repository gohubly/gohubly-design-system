import React from "react";

export default function Svg(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 20.25H3.75V13.5H10.5V20.25Z"
        fill="#425DC7"
        stroke="#425DC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 10.5H13.5V3.75H20.25V10.5Z"
        fill="#425DC7"
        stroke="#425DC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.5H3.75V3.75H10.5V10.5Z"
        fill="#CDD2EB"
        stroke="#CDD2EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.8447 13.7469C17.8447 13.3327 17.5089 12.9969 17.0947 12.9969C16.6805 12.9969 16.3447 13.3327 16.3447 13.7469L16.3447 16.25H14C13.5858 16.25 13.25 16.5858 13.25 17C13.25 17.4142 13.5858 17.75 14 17.75H16.3447L16.3447 20.25C16.3447 20.6642 16.6805 21 17.0947 21C17.5089 21 17.8447 20.6642 17.8447 20.25V17.75H20.5031C20.9173 17.75 21.2531 17.4142 21.2531 17C21.2531 16.5858 20.9173 16.25 20.5031 16.25H17.8447V13.7469Z"
        fill="#425DC7"
      />
    </svg>
  );
}
