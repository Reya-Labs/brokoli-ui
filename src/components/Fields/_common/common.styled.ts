import { css, Theme } from '@emotion/react';

import { ColorTokens } from '../../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../../foundation/Typography';
import { createTransition } from '../../../utils/create-transition';

export type FieldStyleProps = {
  backgroundColorToken?: ColorTokens;
  borderColorToken?: ColorTokens;
  colorToken?: ColorTokens;
  disabledBackgroundColorToken?: ColorTokens;
  disabledBorderColorToken?: ColorTokens;
  disabledColorToken?: ColorTokens;
  error?: boolean;
  errorBorderColorToken?: ColorTokens;
  errorColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  hoverBorderColorToken?: ColorTokens;
  hoverColorToken?: ColorTokens;
  hoverErrorBorderColorToken?: ColorTokens;
  hoverErrorColorToken?: ColorTokens;
  placeholderColorToken?: ColorTokens;
  typographyToken?: TypographyTokens;
};

// basically copy of the props above as array, to be passed to shouldNotForwardProps
export const SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST = [
  'typographyToken',
  'backgroundColorToken',
  'disabledBackgroundColorToken',
  'errorBorderColorToken',
  'borderColorToken',
  'colorToken',
  'errorColorToken',
  'disabledColorToken',
  'placeholderColorToken',
  'hoverBorderColorToken',
  'hoverErrorBorderColorToken',
  'hoverColorToken',
  'hoverErrorColorToken',
  'hoverBackgroundColorToken',
  'disabledBorderColorToken',
];

export const commonInputStyle = ({
  theme,
  error,
  typographyToken = 'bodyMediumBold',
  borderColorToken = 'black700',
  backgroundColorToken = 'black900',
  hoverBackgroundColorToken = 'black800',
  disabledBackgroundColorToken = 'black900',
  placeholderColorToken = 'white950',
  disabledColorToken = 'white950',
  errorBorderColorToken = 'error800',
  errorColorToken = 'error400',
  colorToken = 'white100',
  hoverBorderColorToken = 'black700',
  hoverErrorBorderColorToken = 'error800',
  hoverColorToken = colorToken,
  hoverErrorColorToken = 'error100',
  disabledBorderColorToken = 'black700',
}: FieldStyleProps & {
  theme: Theme;
}) => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  ${css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};

  outline: none;
  transition: ${createTransition()};

  border-radius: 8px;
  background: ${theme.colors[backgroundColorToken]};
  border: ${error
    ? `1px solid ${theme.colors[errorBorderColorToken]}`
    : `1px solid ${theme.colors[borderColorToken]}`};
  color: ${error ? theme.colors[errorColorToken] : theme.colors[colorToken]};

  &:focus,
  &:active,
  &:hover:enabled {
    color: ${error ? theme.colors[hoverErrorColorToken] : theme.colors[hoverColorToken]};
    border: ${error
      ? `1px solid ${theme.colors[hoverErrorBorderColorToken]}`
      : `1px solid ${theme.colors[hoverBorderColorToken]}`};
    background: ${theme.colors[hoverBackgroundColorToken]};
  }

  &:disabled {
    color: ${theme.colors[disabledColorToken]};
    border: 1px solid ${theme.colors[disabledBorderColorToken]};
    background: ${theme.colors[disabledBackgroundColorToken]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors[placeholderColorToken]};
  }
`;
