import { css, Theme } from '@emotion/react';

export const TINY_POPOVER_CONTAINER_CLASS_NAME = 'react-tiny-popover-container';
export const globalReactTinyPopoverContainerCSS = (theme: Theme) => css`
  .${TINY_POPOVER_CONTAINER_CLASS_NAME} {
    background: ${theme.colors.black900};

    border: 1px solid ${theme.colors.black500};
    border-radius: 8px;
    min-width: 160px;
    margin-top: 4px;
    z-index: ${theme.layerIndexes.popover};
    overflow: hidden !important;
  }
`;
