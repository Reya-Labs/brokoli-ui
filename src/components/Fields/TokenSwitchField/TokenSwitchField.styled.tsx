import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

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
  position: absolute;
  right: 8px;
  top: calc(50% - 9px);
  display: flex;
  gap: 8px;
`;

export const SwitchButtonsBox = styled('div')`
  position: absolute;
  left: 8px;
  top: calc(50% - 15px);
`;

export const CurrencyInputStyled = styled(CurrencyInput)<{
  error?: boolean;
  typographyToken: TypographyToken;
}>`
  text-align: right;
  padding: 6px 44px 6px 146px;
  height: 44px;

  ${({ error, typographyToken }) =>
    commonInputStyle({
      error,
      typographyToken,
    })}
`;
