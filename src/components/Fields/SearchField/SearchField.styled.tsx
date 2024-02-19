import styled from '@emotion/styled';

import { TypographyTokens } from '../../../foundation/Typography';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import { commonInputStyle } from '../_common/common.styled';

export const TextInputStyled = styled(
  'input',
  shouldNotForwardProps(['typographyToken', 'error']),
)<{
  error?: boolean;
  typographyToken: TypographyTokens;
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

export const SearchFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SearchTextInputAndCaretBox = styled('div')`
  position: relative;
`;

export const ToggleCaretBox = styled('div')`
  position: absolute;
  right: 10px;
  top: calc(50% - 3.75px);
  z-index: 1;
  color: ${({ theme }) => theme.colors.white100};
`;
