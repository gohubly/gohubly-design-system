import React from "react";

export default function Svg(props: any) {
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="32" rx="5" fill="#E4EAEF"/>
      <rect x="19" y="10" width="2" height="12" rx="1" fill="#142159" fill-opacity="0.4"/>
      <rect x="23" y="12" width="2" height="8" rx="1" fill="#142159" fill-opacity="0.4"/>
      <rect x="27" y="10" width="2" height="12" rx="1" fill="#142159" fill-opacity="0.4"/>
      <path d="M16 8H15.2C14.0799 8 13.5198 8 13.092 8.21799C12.7157 8.40973 12.4097 8.71569 12.218 9.09202C12 9.51984 12 10.0799 12 11.2V12" stroke="#142159" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
      <path d="M36 12L36 11.2C36 10.0799 36 9.51984 35.782 9.09202C35.5903 8.71569 35.2843 8.40973 34.908 8.21799C34.4802 8 33.9201 8 32.8 8L32 8" stroke="#142159" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
      <path d="M16 24H15.2C14.0799 24 13.5198 24 13.092 23.782C12.7157 23.5903 12.4097 23.2843 12.218 22.908C12 22.4802 12 21.9201 12 20.8V20" stroke="#142159" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
      <path d="M36 20L36 20.8C36 21.9201 36 22.4802 35.782 22.908C35.5903 23.2843 35.2843 23.5903 34.908 23.782C34.4802 24 33.9201 24 32.8 24L32 24" stroke="#142159" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round"/>
      <path className="line-bg" d="M14 16H34" stroke="#E6E9F5" stroke-width="4" stroke-linecap="round"/>
      <path d="M16 16H32" stroke="#2E44A1" stroke-width="2" stroke-linecap="round"/>
    </svg>

  );
}