import { css, Theme } from '@emotion/react';

export const globalScrollbarCSS = (theme: Theme) => css`
  /* Scroll bar styling */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track styling */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.liberty8};
  }

  /* Handle styling */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.lavenderWeb7};
    border-radius: 2px;
  }

  /* Handle on hover styling */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.lavenderWeb6};
  }
`;
