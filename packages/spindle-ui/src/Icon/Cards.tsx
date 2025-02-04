import * as React from 'react';
import { SVGProps } from 'react';

const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.517 6.4-3.492-.936-.063-.726a3 3 0 0 0-3.25-2.726l-6.973.61a2.999 2.999 0 0 0-2.727 3.25l.914 10.445a3 3 0 0 0 3.249 2.728l1.061-.093 7.387 1.98a2 2 0 0 0 2.45-1.415L20.93 8.85a2 2 0 0 0-1.414-2.45Zm-5.542 10.042L7 17.052a1.024 1.024 0 0 1-.73-.23.993.993 0 0 1-.353-.678L5.004 5.696a1 1 0 0 1 .909-1.082l6.974-.61a.987.987 0 0 1 .73.23.998.998 0 0 1 .353.68l.914 10.444a1.003 1.003 0 0 1-.91 1.084Z" />
  </svg>
);

export default SvgCards;
