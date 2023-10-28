import { css } from '@emotion/react';

import { colors } from '../../../foundation/Colors';
import { typography } from '../../../foundation/Typography';
import { TypographyToken } from '../../Typography';

type CommonInputStyleArgs = {
  error?: boolean;
  typographyToken: TypographyToken;
};

export const commonInputStyle = ({ error, typographyToken }: CommonInputStyleArgs) => css`
  box-sizing: border-box;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  ${css(typography[typographyToken].styleObject)};

  outline: none;
  transition: all 200ms ease-in;

  border-radius: 4px;
  background: ${colors.liberty8};
  border: ${error ? `1px solid ${colors.wildStrawberry7}` : `1px solid ${colors.lavenderWeb7}`};
  color: ${error ? colors.wildStrawberry3 : colors.lavenderWeb3};

  &:focus,
  &:active,
  &:hover {
    color: ${error ? colors.wildStrawberry : colors.lavenderWeb};
    border: ${error ? `1px solid ${colors.wildStrawberry7}` : `1px solid ${colors.lavenderWeb4}`};
    background: ${colors.lavenderWeb8};
  }

  &:disabled {
    color: ${colors.lavenderWeb4};
    border: 1px solid ${colors.lavenderWeb4};
    background: ${colors.lavenderWeb7};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.lavenderWeb3};
  }
`;
