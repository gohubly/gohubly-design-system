import React from "react";

export default function Svg(props: any) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.4375 1.5625L1.5625 8.4375" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.5625 1.5625L8.4375 8.4375" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}