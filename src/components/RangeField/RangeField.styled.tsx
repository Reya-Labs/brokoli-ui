import styled from '@emotion/styled';
import ReactSlider from 'react-slider';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const BoxContainer = styled(
  'div',
  shouldNotForwardProps(['trackHeight', 'thumbHeight', 'trackColorToken', 'thumbColorToken']),
)<{
  trackColorToken: 'transparent' | ColorTokens;
}>`
  padding: 4px;
  width: 100%;
  background-color: ${({ trackColorToken, theme }) =>
    trackColorToken === 'transparent'
      ? 'transparent'
      : getColorFromToken({ colorToken: trackColorToken, theme })};
`;

export const StyledSlider = styled(ReactSlider, shouldNotForwardProps(['height']))<{
  height: number;
}>`
  width: 100%;
  height: ${({ height }) => height}px;
`;
