import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { TypographyTokens } from '../../../foundation/Typography';
import { Button } from '../../Button';
import { commonInputStyle } from '../_common/common.styled';

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
  typographyToken: TypographyTokens;
}>`
  padding: 10px 96px 10px 16px;
  height: 44px;

  ${({ theme, error, typographyToken }) =>
    commonInputStyle({
      error,
      theme,
      typographyToken,
    })}
`;

export const ToggleCaretBox = styled('div')`
  position: absolute;
  right: 10px;
  top: calc(50% - 3.75px);
  z-index: 1;
  color: ${({ theme }) => theme.colors.white100};
  cursor: pointer;
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
