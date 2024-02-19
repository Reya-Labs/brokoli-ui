import { css, Theme } from '@emotion/react';

import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../../foundation/Typography';

type CommonInputStyleArgs = {
  error?: boolean;
  typographyToken: TypographyTokens;
  theme: Theme;
};

export const commonInputStyle = ({ theme, error, typographyToken }: CommonInputStyleArgs) => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  ${css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};

  outline: none;
  transition: all 200ms ease-in;

  border-radius: 8px;
  background: ${theme.colors.black900};
  border: ${error ? `1px solid ${theme.colors.error800}` : `1px solid ${theme.colors.black700}`};
  color: ${error ? theme.colors.error400 : theme.colors.white100};

  &:focus,
  &:active,
  &:hover {
    color: ${error ? theme.colors.error100 : theme.colors.white100};
    border: ${error ? `1px solid ${theme.colors.error800}` : `1px solid ${theme.colors.black700}`};
    background: ${theme.colors.black800};
  }

  &:disabled {
    color: ${theme.colors.black100};
    border: 1px solid ${theme.colors.black900};
    background: ${theme.colors.black900};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.black100};
  }
`;
