import * as React from 'react';

function SvgFileCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1.6-13.1c-.3-.3-.7-.4-1.1-.4H10c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5h5c.8 0 1.5-.7 1.5-1.5v-4.6c0-.4-.2-.8-.4-1.1l-2.5-2.4zm1.3 3.6H13c-.3 0-.5-.2-.5-.5V8.1c0-.2.3-.3.4-.2L15 10c.2.2.1.5-.1.5z" />
    </svg>
  );
}

export default SvgFileCircle;
