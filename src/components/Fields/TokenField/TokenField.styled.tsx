import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { TypographyToken } from '../../../foundation/Typography';
import { Button } from '../../Button';
import { commonInputStyle } from '../_common/common.styled';

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

export const CurrencyInputStyled = styled(CurrencyInput)<{
  error?: boolean;
  typographyToken: TypographyToken;
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

export const MaxButton = styled(Button)`
  padding: 4px 8px;
`;

export const FloatingBox = styled('div')`
  position: absolute;
  right: 16px;
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
