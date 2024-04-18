import styled from '@emotion/styled';
import CurrencyInput from 'react-currency-input-field';

import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import {
  commonInputStyle,
  FieldStyleProps,
  SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST,
} from '../_common/common.styled';

export const CurrencyInputStyled = styled(
  CurrencyInput,
  shouldNotForwardProps(SHOULD_NOT_FORWARD_FIELD_STYLE_PROPS_LIST),
)<FieldStyleProps>`
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

export const CurrencyFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
