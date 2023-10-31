import { css, Theme } from '@emotion/react';

import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../../foundation/Typography';

type CommonInputStyleArgs = {
  error?: boolean;
  typographyToken: TypographyToken;
  theme: Theme;
};

export const commonInputStyle = ({ theme, error, typographyToken }: CommonInputStyleArgs) => css`
  box-sizing: border-box;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  ${css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};

  outline: none;
  transition: all 200ms ease-in;

  border-radius: 4px;
  background: ${theme.colors.liberty8};
  border: ${error
    ? `1px solid ${theme.colors.wildStrawberry7}`
    : `1px solid ${theme.colors.white800}`};
  color: ${error ? theme.colors.wildStrawberry3 : theme.colors.lavenderWeb3};

  &:focus,
  &:active,
  &:hover {
    color: ${error ? theme.colors.wildStrawberry : theme.colors.lavenderWeb};
    border: ${error
      ? `1px solid ${theme.colors.wildStrawberry7}`
      : `1px solid ${theme.colors.white500}`};
    background: ${theme.colors.white900};
  }

  &:disabled {
    color: ${theme.colors.white500};
    border: 1px solid ${theme.colors.white500};
    background: ${theme.colors.white800};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.lavenderWeb3};
  }
`;
