import { css, Theme } from '@emotion/react';

import { addAlpha } from '../../foundation/Colors';

export const TINY_POPOVER_CONTAINER_CLASS_NAME = 'react-tiny-popover-container';
export const globalReactTinyPopoverContainerCSS = (theme: Theme) => css`
  .${TINY_POPOVER_CONTAINER_CLASS_NAME} {
    background: ${theme.colors.black800};

    border: 1px solid ${theme.colors.white800};
    box-shadow: 0px 0px 20px ${addAlpha(theme.colors.white100, 0.1)};
    border-radius: 4px;
    min-width: 160px;
    margin-top: 4px;
    z-index: ${theme.layerIndexes.popover};
  }
`;
