import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { TypographyToken } from '../../../foundation/Typography';
import { commonInputStyle } from '../_common/common.styled';

export const CurrencyInputStyled = styled(CurrencyInput)<{
  error?: boolean;
  typographyToken: TypographyToken;
}>`
  padding: 8px 10px;
  height: 100%;

  ${({ theme, error, typographyToken }) =>
    commonInputStyle({
      error,
      theme,
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
