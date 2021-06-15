import React from 'react'

function Seed({ fillColor, strokeColor }) {

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={fillColor} />
      <g clipPath="url(#clip0)">
        <path
          d="M18.6673 13.6667C16.5932 14.9111 17.0007 15.3334 16.9149 18.0001C17.0364 15.3334 16.6673 14.3334 15.334 12.3334"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1265 13.662C20.2732 14.5153 19.3399 14.862 17.82 14.622C17.58 13.1021 17.9267 12.1688 18.78 11.3155C19.6333 10.4622 20.5666 10.1155 22.5131 9.92889C22.3265 11.8755 21.9798 12.8087 21.1265 13.662Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1535 9.89325C16.0068 10.7465 16.3534 11.6798 16.1134 13.1997C14.5935 13.4397 13.6602 13.0931 12.8069 12.2398C11.9536 11.3865 11.607 10.4532 11.4203 8.50666C13.3669 8.69332 14.3002 9.03997 15.1535 9.89325Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5559 19.8333H17.3972C18.3575 19.8333 18.3575 19.1667 18.3575 18.9167C18.3575 18.6667 18.0956 18.1667 17.3972 18.1667H15.4765C15.1564 17.8056 14.1845 17.0833 12.8575 17.0833H10.2384M10.2384 20.8333C11.6061 21.4444 14.6035 22.6667 15.6511 22.6667C16.6987 22.6667 21.2093 20.3333 23.3337 19.1667C23.1009 18.75 22.3733 18.0167 21.3257 18.4167C20.2781 18.8167 18.897 19.2621 18.2277 19.4843M8.66699 19.3333V22.1667C8.9289 22.1667 8.87652 22.1667 9.3654 22.1667C9.97652 22.1667 10.2384 21.75 10.2384 21.25C10.2384 20.85 10.2384 19.9722 10.2384 19.3333V16.9167C10.2384 16.4167 9.97652 16 9.3654 16H8.66699V19.3333Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Seed
