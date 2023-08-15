import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { colors } from '../../../foundation/Colors';
import { Button } from '../../Button';
import { TypographyToken } from '../../Typography';
import { commonInputStyle } from '../shared/common.styled';

export const MarginAmountTokenFieldBox = styled('div')`
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

export const MaxButton = styled(Button)`
  padding: 4px 8px;
`;

export const CurrencyInputStyled = styled(CurrencyInput)<{
  error?: boolean;
  typographyToken: TypographyToken;
}>`
  padding: 10px 96px 10px 16px;
  height: 44px;

  ${({ error, typographyToken }) =>
    commonInputStyle({
      error,
      typographyToken,
    })}
`;

export const ToggleCaretBox = styled('div')`
  position: absolute;
  right: 10px;
  top: calc(50% - 3.75px);
  z-index: 1;
  color: ${colors.lavenderWeb};
  cursor: pointer;
`;

export const FloatingBox = styled('div')`
  position: absolute;
  right: 8px;
  top: calc(50% - 12px);
  z-index: 1;
  color: ${colors.lavenderWeb};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
