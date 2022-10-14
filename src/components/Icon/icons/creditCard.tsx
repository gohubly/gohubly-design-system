import React from "react";

export default function Svg(props: any) {
  return (
    <svg {...props} width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="32" rx="5" fill="#E4EAEF"/>
      <rect x="8" y="8" width="32" height="2" rx="1" fill="#2E44A1"/>
      <rect x="8" y="22" width="8" height="2" rx="1" fill="#9299B7"/>
    </svg>
  );
}