import styled from '@emotion/styled';

import { TypographyToken } from '../../Typography';
import { commonInputStyle } from '../shared/common.styled';

export const TextInputStyled = styled('input', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'error',
})<{
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

export const TextFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;
