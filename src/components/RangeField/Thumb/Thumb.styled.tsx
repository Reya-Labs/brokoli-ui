import styled from '@emotion/styled';

import { addAlpha, ColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const StyledThumb = styled(
  'div',
  shouldNotForwardProps(['height', 'width', 'trackHeight', 'colorToken']),
)<{
  height: number;
  width: number;
  trackHeight: number;
  colorToken: ColorTokens;
}>`
  height: ${({ height }) => height}px;
  line-height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  text-align: center;
  background-color: ${({ colorToken, theme }) => getColorFromToken({ colorToken, theme })};
  border-radius: 50%;
  box-shadow: 0px 0px ${({ height }) => height + 2}px 0px
    ${({ theme, colorToken }) => addAlpha(getColorFromToken({ colorToken, theme }), 0.5)};
  cursor: grab;
  outline: none;
  top: ${({ trackHeight, height }) => (trackHeight - height) / 2}px;
`;
