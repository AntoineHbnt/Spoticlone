import React from 'react';
import { IconSVGProps } from '../icon';

function LibraryFulfilled(props: IconSVGProps) {
  const { className, width, height, fill } = props;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
}

export default LibraryFulfilled;
