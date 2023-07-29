import { css } from '@emotion/react';

import { colors } from '../../foundation/Colors';
import { LAYER_INDEXES } from '../../foundation/LayerIndexes';

export const TINY_POPOVER_CONTAINER_CLASS_NAME = 'react-tiny-popover-container';
export const globalReactTinyPopoverContainerCSS = css`
  .${TINY_POPOVER_CONTAINER_CLASS_NAME} {
    background: ${colors.liberty7};

    border: 1px solid ${colors.lavenderWeb7};
    box-shadow: 0px 0px 20px rgba(225, 221, 247, 0.1);
    border-radius: 4px;
    min-width: 160px;
    margin-top: 4px;
    z-index: ${LAYER_INDEXES.POPOVER};
  }
`;
