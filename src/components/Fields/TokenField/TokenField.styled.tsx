import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import { Button } from '../../Button';
import {
  commonInputStyle,
  FieldStyleProps,
  SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST,
} from '../_common/common.styled';

export const TokenFieldBox = styled('div')`
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

export const CurrencyInputBox = styled('div')`
  position: relative;
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
  padding: 10px 96px 10px ${({ hasPrefixToken }) => (hasPrefixToken ? 20 : 16)}px;
  height: 44px;

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
    commonInputStyle({
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

export const MaxButton = styled(Button)`
  padding: 4px 8px;
`;

export const FloatingBox = styled('div')`
  position: absolute;
  right: 8px;
  top: calc(50% - 12px);
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
  top: calc(50% - 12px);
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
