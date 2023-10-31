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
  border: ${error ? `1px solid ${theme.colors.error800}` : `1px solid ${theme.colors.white800}`};
  color: ${error ? theme.colors.error400 : theme.colors.white400};

  &:focus,
  &:active,
  &:hover {
    color: ${error ? theme.colors.error100 : theme.colors.white100};
    border: ${error ? `1px solid ${theme.colors.error800}` : `1px solid ${theme.colors.white500}`};
    background: ${theme.colors.white900};
  }

  &:disabled {
    color: ${theme.colors.white500};
    border: 1px solid ${theme.colors.white500};
    background: ${theme.colors.white800};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.white400};
  }
`;
