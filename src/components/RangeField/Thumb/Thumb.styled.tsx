import styled from '@emotion/styled';

import { addAlpha, ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const StyledThumb = styled('div', shouldNotForwardProps(['size', 'thumbColorToken']))<{
  size: number;
  thumbColorToken: ColorTokens;
}>`
  height: ${({ size }) => size}px;
  line-height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  text-align: center;
  background-color: ${({ thumbColorToken, theme }) =>
    getColorFromToken({ colorToken: thumbColorToken, theme })};
  border-radius: 50%;
  box-shadow: 0px 0px ${({ size }) => size + 2}px 0px
    ${({ theme, thumbColorToken }) =>
      addAlpha(getColorFromToken({ colorToken: thumbColorToken, theme }), 0.5)};
  cursor: grab;
`;
