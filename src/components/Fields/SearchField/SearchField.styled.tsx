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

export const SearchFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
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