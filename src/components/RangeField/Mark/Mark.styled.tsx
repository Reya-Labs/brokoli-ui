import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const StyledMark = styled('span', shouldNotForwardProps(['height', 'colorToken']))<{
  colorToken: ColorTokens;
  height: number;
}>`
  top: 0;
  bottom: 0;
  background: ${({ theme, colorToken }) =>
    getColorFromToken({
      colorToken,
      theme,
    })};
  width: 2px;
  height: ${({ height }) => height}px;
`;
