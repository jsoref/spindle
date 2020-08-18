import * as React from 'react';

function SvgAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3h3.5c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm10.5 0H19c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2h-3.5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm-7 10.5H5c-1.1 0-2 .9-2 2V19c0 1.1.9 2 2 2h3.5c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2zm7 0H19c1.1 0 2 .9 2 2V19c0 1.1-.9 2-2 2h-3.5c-1.1 0-2-.9-2-2v-3.5c0-1.1.9-2 2-2z"
      />
    </svg>
  );
}

export default SvgAll;
