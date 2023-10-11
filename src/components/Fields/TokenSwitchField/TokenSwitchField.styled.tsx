import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { colors } from '../../../foundation/Colors';
import { Button } from '../../Button';
import { TypographyToken } from '../../Typography';
import { commonInputStyle } from '../shared/common.styled';

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
`;

export const SwitchButtonsBox = styled('div')`
  position: absolute;
  left: 8px;
  top: calc(50% - 15px);
`;

export const CurrencyInputStyled = styled(CurrencyInput, {
  shouldForwardProp: (prop) =>
    prop !== 'typographyToken' && prop !== 'error' && prop !== 'hasMaxButton',
})<{
  error?: boolean;
  typographyToken: TypographyToken;
  hasMaxButton: boolean;
}>`
  text-align: right;
  padding: ${({ hasMaxButton }) => (hasMaxButton ? '6px 102px 6px 146px' : '6px 52px 6px 146px')};
  height: 44px;

  ${({ error, typographyToken }) =>
    commonInputStyle({
      error,
      typographyToken,
    })}
`;

export const MaxButton = styled(Button)`
  padding: 4px 8px;
`;

export const FloatingBox = styled('div')`
  position: absolute;
  right: 16px;
  top: calc(50% - 12px);
  z-index: 1;
  color: ${colors.lavenderWeb};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  height: 24px;
`;
