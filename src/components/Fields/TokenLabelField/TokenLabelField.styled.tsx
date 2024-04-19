import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { getResponsiveTypographyStyleFromToken } from '../../../foundation/Typography';
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

export const CurrencyInputBottomBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
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
  border-radius: 8px;
  background: ${theme.colors[backgroundColorToken]};
  border: ${error
    ? `1px solid ${theme.colors[errorBorderColorToken]}`
    : `1px solid ${theme.colors[borderColorToken]}`};
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
  }

  &:disabled {
    border: 1px solid ${theme.colors[disabledBorderColorToken]};
    background: ${theme.colors[disabledBackgroundColorToken]};
    cursor: not-allowed;
  }

  & input::placeholder {
    color: ${theme.colors[placeholderColorToken]};
  }
`;

export const CurrencyInputBox = styled(
  'div',
  shouldNotForwardProps(['error', ...SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST]),
)<
  {
    error?: boolean;
  } & FieldStyleProps
>`
  position: relative;
  padding: 8px 4px;

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
  }) =>
    inputStyle({
      backgroundColorToken,
      borderColorToken,
      colorToken,
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
  shouldNotForwardProps(['hasPrefixToken', 'error', ...SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST]),
)<
  {
    error?: boolean;
    hasPrefixToken: boolean;
  } & FieldStyleProps
>`
  height: 44px;
  padding: 4px 96px 0px ${({ hasPrefixToken }) => (hasPrefixToken ? 16 : 0)}px;
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
  padding: 4px 8px;
`;

export const FloatingBox = styled('div')`
  position: absolute;
  right: 16px;
  top: 50%;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white100};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  height: 24px;
`;

export const LeftFloatingBox = styled('div')`
  position: absolute;
  left: 8px;
  top: 50%;
  z-index: 1;
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
