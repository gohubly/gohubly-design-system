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
        d="M2.5 6.66647L12.5 6.66647M12.5 6.66647C12.5 8.04716 13.6193 9.16643 15 9.16643C16.3807 9.16643 17.5 8.04716 17.5 6.66647C17.5 5.28578 16.3807 4.1665 15 4.1665C13.6193 4.1665 12.5 5.28578 12.5 6.66647ZM7.5 13.333L17.5 13.333M7.5 13.333C7.5 14.7137 6.38071 15.833 5 15.833C3.61929 15.833 2.5 14.7137 2.5 13.333C2.5 11.9523 3.61929 10.8331 5 10.8331C6.38071 10.8331 7.5 11.9523 7.5 13.333Z"
        stroke="#262626"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
