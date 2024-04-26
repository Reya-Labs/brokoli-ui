import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../../foundation/Typography';
import { createTransition } from '../../../utils/create-transition';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import { Button } from '../../Button';
import {
  FieldStyleProps,
  SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST,
} from '../_common/common.styled';

export const TokenLabelFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TopBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const inputStyle = ({
  theme,
  error,
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
  disabled,
}: FieldStyleProps & {
  disabled: boolean;
  theme: Theme;
}) => css`
  border-radius: 8px;
  background: ${theme.colors[disabled ? disabledBackgroundColorToken : backgroundColorToken]};
  border: ${`1px solid ${
    theme.colors[
      error ? errorBorderColorToken : disabled ? disabledBorderColorToken : borderColorToken
    ]
  }`};
  transition: ${createTransition()};

  & input {
    outline: none;
    color: ${error ? theme.colors[errorColorToken] : theme.colors[colorToken]};
  }

  & input:focus,
  & input:active,
  & input:hover:enabled {
    color: ${error ? theme.colors[hoverErrorColorToken] : theme.colors[hoverColorToken]};
  }

  &:hover {
    border: ${error
      ? `1px solid ${theme.colors[hoverErrorBorderColorToken]}`
      : `1px solid ${theme.colors[hoverBorderColorToken]}`};
    background: ${theme.colors[hoverBackgroundColorToken]};
  }

  & input:disabled {
    color: ${theme.colors[disabledColorToken]};
    cursor: not-allowed;
  }

  &:disabled {
    cursor: not-allowed;
  }

  & input::placeholder {
    color: ${theme.colors[placeholderColorToken]};
  }
`;

export const CurrencyInputBox = styled(
  'div',
  shouldNotForwardProps(['error', 'disabled', ...SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST]),
)<
  {
    disabled: boolean;
    error?: boolean;
  } & FieldStyleProps
>`
  position: relative;
  padding: 4px 8px;
  width: 100%;

  ${({
    theme,
    error,
    typographyToken,
    backgroundColorToken,
    disabledBackgroundColorToken,
    errorBorderColorToken,
    borderColorToken,
    colorToken,
    errorColorToken,
    disabledColorToken,
    placeholderColorToken,
    hoverBorderColorToken,
    hoverErrorBorderColorToken,
    hoverColorToken,
    hoverErrorColorToken,
    hoverBackgroundColorToken,
    disabledBorderColorToken,
    disabled,
  }) =>
    inputStyle({
      backgroundColorToken,
      borderColorToken,
      colorToken,
      disabled,
      disabledBackgroundColorToken,
      disabledBorderColorToken,
      disabledColorToken,
      error,
      errorBorderColorToken,
      errorColorToken,
      hoverBackgroundColorToken,
      hoverBorderColorToken,
      hoverColorToken,
      hoverErrorBorderColorToken,
      hoverErrorColorToken,
      placeholderColorToken,
      theme,
      typographyToken,
    })}
`;

export const TokenBox = styled('div')`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const CurrencyInputStyled = styled(
  CurrencyInput,
  shouldNotForwardProps(['error', 'typographyToken']),
)<{
  error?: boolean;
  typographyToken: TypographyTokens;
}>`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};

  background: transparent;
  border: none;
`;

export const MaxButton = styled(Button)`
  padding: 2px 8px;
`;

export const TokenAndMaxBox = styled('div')`
  color: ${({ theme }) => theme.colors.white100};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  height: 24px;
`;

export const InputTokenAndMaxBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const PrefixBox = styled('div')`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  height: 24px;
`;

export const TokenSelect = styled('select')`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
