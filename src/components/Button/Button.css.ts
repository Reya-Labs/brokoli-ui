import { css } from '@emotion/react';

import { colors } from '../../foundation/Colors';

export const primaryButtonCSS = css`
  background: ${colors.lavenderWeb};
  border: 1px solid ${colors.liberty5};
  box-shadow: 0px 2px 10px ${colors.liberty6}, 0px 8px 40px rgba(38, 103, 255, 0.2),
    0px 5px 40px rgba(255, 74, 169, 0.2);
  color: ${colors.liberty8};

  &:hover {
    box-shadow: 0px 2px 4px ${colors.liberty6}, 0px 12px 43px rgba(38, 103, 255, 0.4),
      0px 10px 50px rgba(255, 74, 169, 0.2);
  }

  &:active {
    box-shadow: 0px 2px 3px ${colors.liberty6}, 0px 2px 12px rgba(38, 103, 255, 0.3),
      0px 0px 10px rgba(255, 74, 169, 0.2), inset 0px 4px 13px rgba(11, 9, 17, 0.3);
  }

  &:disabled {
    background: ${colors.lavenderWeb7};
    color: ${colors.lavenderWeb4};
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const secondaryButtonCSS = css`
  background: transparent;
  border: 1px solid ${colors.lavenderWeb7};
  color: ${colors.lavenderWeb};

  &:hover {
    border: 1px solid ${colors.lavenderWeb4};
  }

  &:disabled {
    color: ${colors.lavenderWeb6};
    cursor: not-allowed;
  }
`;
