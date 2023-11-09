import styled from '@emotion/styled';

import { TypographyToken } from '../../../foundation/Typography';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import { commonInputStyle } from '../_common/common.styled';

export const TextInputStyled = styled(
  'input',
  shouldNotForwardProps(['typographyToken', 'error']),
)<{
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
