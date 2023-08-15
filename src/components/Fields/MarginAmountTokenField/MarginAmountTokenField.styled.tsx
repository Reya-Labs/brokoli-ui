import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

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
  position: absolute;
  right: 16px;
  top: calc(50% - 11px);
  display: flex;
  gap: 8px;
  align-items: center;
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
