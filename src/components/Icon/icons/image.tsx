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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 3H19C20.1046 3 21 3.89543 21 5V13.9391L16.5303 9.46943C16.3897 9.32877 16.1989 9.24976 16 9.24976C15.8011 9.24976 15.6103 9.32877 15.4697 9.46943L4.13521 20.8039C3.46364 20.4813 3 19.7948 3 19V5C3 3.89543 3.89543 3 5 3ZM6.06042 21H19C20.1046 21 21 20.1046 21 19V16.0604L16 11.0604L6.06042 21Z"
        fill="#CDD2EB"
      />
      <path
        d="M8.5 9.99976C9.32843 9.99976 10 9.32818 10 8.49976C10 7.67133 9.32843 6.99976 8.5 6.99976C7.67157 6.99976 7 7.67133 7 8.49976C7 9.32818 7.67157 9.99976 8.5 9.99976Z"
        stroke="#425DC7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}