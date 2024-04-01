import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const StyledMark = styled(
  'span',
  shouldNotForwardProps(['height', 'trackHeight', 'colorToken']),
)<{
  colorToken: ColorTokens;
  height: number;
  trackHeight: number;
}>`
  background: ${({ theme, colorToken }) =>
    getColorFromToken({
      colorToken,
      theme,
    })};
  width: 2px;
  height: ${({ height }) => height}px;
  top: ${({ trackHeight, height }) => (trackHeight - height) / 2}px;
  z-index: 0;
  pointer-events: none;
`;
