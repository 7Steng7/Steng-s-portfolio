import React from "react";

export default function WavesTop() {
  return (
    <svg
      className="top-0 left-0 block w-full h-[60px] max-h-[60px]"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave-top"
          d="M-160 44c30 0 
             58-18 88-18s
             58 18 88 18 
             58-18 88-18 
             58 18 88 18
             v44h-352z"
        />
      </defs>
      <g className="animate-moveForever1">
        <use xlinkHref="#gentle-wave-top" x="50" y="3" fill="#003355" />
      </g>
      <g className="animate-moveForever2">
        <use xlinkHref="#gentle-wave-top" x="50" y="0" fill="#66aabb" />
      </g>
      <g className="animate-moveForever3">
        <use xlinkHref="#gentle-wave-top" x="50" y="9" fill="#002144" />
      </g>
      <g className="animate-moveForever4">
        <use xlinkHref="#gentle-wave-top" x="50" y="6" fill="#004466" />
      </g>
    </svg>
  );
}
