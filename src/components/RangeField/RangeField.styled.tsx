import styled from '@emotion/styled';
import ReactSlider from 'react-slider';

import { addAlpha, ColorTokens, getColorFromToken } from '../../foundation/Colors';
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

export const StyledTrack = styled('div', shouldNotForwardProps(['index', 'trackColorToken']))<{
  index: number;
  trackColorToken: ColorTokens;
}>`
  top: 0;
  bottom: 0;
  background: ${({ theme, index, trackColorToken }) =>
    index === 1
      ? 'transparent'
      : getColorFromToken({
          colorToken: trackColorToken,
          theme,
        })};
  border-radius: 8px;
  z-index: 999;
`;

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
