import { css } from '@emotion/react';

import { colors } from '../Colors';

export const globalScrollbarCSS = css`
  /* Scroll bar styling */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track styling */
  ::-webkit-scrollbar-track {
    background: ${colors.liberty8};
  }

  /* Handle styling */
  ::-webkit-scrollbar-thumb {
    background: ${colors.lavenderWeb7};
    border-radius: 2px;
  }

  /* Handle on hover styling */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.lavenderWeb6};
  }
`;
