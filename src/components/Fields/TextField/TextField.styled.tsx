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
    theme,
    error,
    typographyToken,
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

export const TextFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const TextFieldBottomBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const BottomBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
