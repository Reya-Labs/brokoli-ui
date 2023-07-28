import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { TypographyToken } from '../../Typography';
import { commonInputStyle } from '../shared/common.styled';

export const CurrencyInputStyled = styled(CurrencyInput)<{
  error?: boolean;
  typographyToken: TypographyToken;
}>`
  padding: 8px 10px;
  height: 100%;

  ${({ error, typographyToken }) =>
    commonInputStyle({
      error,
      typographyToken,
    })}
`;

export const CurrencyFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;
