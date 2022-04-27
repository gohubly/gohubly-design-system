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
        d="M4.19976 3.75H19.7998C20.8723 3.75 21.7498 4.67812 21.7498 5.8125V18.1875C21.7498 19.3219 20.8723 20.25 19.7998 20.25H4.19976C3.12726 20.25 2.24976 19.3219 2.24976 18.1875V5.8125C2.24976 4.67812 3.12726 3.75 4.19976 3.75Z"
        fill="#CDD2EB"
        stroke="#CDD2EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7498 5.8125L11.9998 13.0313L2.24976 5.8125"
        stroke="#425DC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}