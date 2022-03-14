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
        d="M21.3933 13.903L13.9135 21.3829C13.7197 21.5768 13.4896 21.7307 13.2363 21.8357C12.983 21.9407 12.7115 21.9948 12.4373 21.9948C12.1631 21.9948 11.8916 21.9407 11.6383 21.8357C11.3851 21.7307 11.155 21.5768 10.9612 21.3829L2.58661 13.018C2.21103 12.6429 2 12.1338 2 11.603V4C2 2.89543 2.89543 2 4 2H11.6037C12.1341 2 12.6428 2.21071 13.0179 2.58579L21.3933 10.9612C21.7819 11.3521 22 11.8809 22 12.4321C22 12.9833 21.7819 13.5121 21.3933 13.903Z"
        fill="#CDD2EB"
        stroke="#CDD2EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8H8.01"
        stroke="#425DC7"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}