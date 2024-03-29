import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const BoxContainer = styled(
  'div',
  shouldNotForwardProps(['trackHeight', 'thumbHeight', 'trackColorToken', 'thumbColorToken']),
)<{
  trackColorToken: 'transparent' | ColorTokens;
}>`
  border-radius: 4px;
  padding: 4px;
  width: 100%;
  position: relative;
  display: flex;
  background-color: ${({ trackColorToken, theme }) =>
    trackColorToken === 'transparent'
      ? 'transparent'
      : getColorFromToken({ colorToken: trackColorToken, theme })};
`;

export const StyledInput = styled(
  'input',
  shouldNotForwardProps(['trackHeight', 'thumbHeight', 'thumbColorToken']),
)<{
  thumbColorToken: ColorTokens;
  thumbHeight: number;
  trackHeight: number;
}>`
  /*********** Baseline, reset styles ***********/
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  /* Removes default focus */
  &:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  /* slider track */
  &::-webkit-slider-runnable-track {
    background-color: transparent;
    border-radius: 0.5rem;
    height: ${({ trackHeight }) => trackHeight}px;
  }

  /* slider thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: ${({ thumbHeight, trackHeight }) => (trackHeight - thumbHeight) / 2}px;
    background-color: ${({ thumbColorToken, theme }) =>
      getColorFromToken({ colorToken: thumbColorToken, theme })};
    border-radius: 0.5rem;
    height: ${({ thumbHeight }) => thumbHeight}px;
    width: ${({ thumbHeight }) => thumbHeight}px;
  }

  &:focus::-webkit-slider-thumb {
    outline: 3px solid
      ${({ thumbColorToken, theme }) => getColorFromToken({ colorToken: thumbColorToken, theme })};
    outline-offset: 0.125rem;
  }

  /*********** Firefox styles ***********/
  /* slider track */
  &::-moz-range-track {
    background-color: transparent;
    border-radius: 0.5rem;
    height: ${({ trackHeight }) => trackHeight}px;
  }

  /* slider thumb */
  &::-moz-range-thumb {
    background-color: ${({ thumbColorToken, theme }) =>
      getColorFromToken({ colorToken: thumbColorToken, theme })};
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0.5rem;
    height: ${({ thumbHeight }) => thumbHeight}px;
    width: ${({ thumbHeight }) => thumbHeight}px;
    margin-top: ${({ thumbHeight, trackHeight }) => (trackHeight - thumbHeight) / 2}px;
  }

  &:focus::-moz-range-thumb {
    outline: 3px solid
      ${({ thumbColorToken, theme }) => getColorFromToken({ colorToken: thumbColorToken, theme })};
    outline-offset: 0.125rem;
  }
`;

export const Segment = styled('div', shouldNotForwardProps(['height']))<{
  height: number;
}>`
  height: ${({ height }) => height}px;
  width: 2px;
  border-radius: 2px;
  background: white;
`;

export const SegmentBox = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
  padding: 4px;
  border-radius: 4px;
`;
