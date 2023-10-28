import styled from '@emotion/styled';

import { TypographyToken } from '../../../foundation/Typography';
import { commonInputStyle } from '../_common/common.styled';

export const TextInputStyled = styled('input', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'error',
})<{
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

export const TextFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;
