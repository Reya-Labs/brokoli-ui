import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import {
  commonInputStyle,
  FieldStyleProps,
  SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST,
} from '../_common/common.styled';

export const TextInputStyled = styled(
  'input',
  shouldNotForwardProps(['error', ...SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST]),
)<
  {
    error?: boolean;
  } & FieldStyleProps
>`
  padding: 8px 10px;
  height: 100%;

  ${({
    backgroundColorToken,
    disabledBackgroundColorToken,
    errorBorderColorToken,
    borderColorToken,
    colorToken,
    errorColorToken,
    disabledColorToken,
    placeholderColorToken,
    hoverBorderColorToken,
    hoverErrorBorderColorToken,
    hoverColorToken,
    hoverErrorColorToken,
    hoverBackgroundColorToken,
    disabledBorderColorToken,
    theme,
    error,
    typographyToken,
  }) =>
    commonInputStyle({
      backgroundColorToken,
      borderColorToken,
      colorToken,
      disabledBackgroundColorToken,
      disabledBorderColorToken,
      disabledColorToken,
      error,
      errorBorderColorToken,
      errorColorToken,
      hoverBackgroundColorToken,
      hoverBorderColorToken,
      hoverColorToken,
      hoverErrorBorderColorToken,
      hoverErrorColorToken,
      placeholderColorToken,
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
