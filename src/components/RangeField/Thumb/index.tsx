import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { ColorTokens } from '../../../foundation/Colors';
import { StyledThumb } from './Thumb.styled';

export type ThumbProps = {
  size: number;
  trackHeight: number;
  colorToken: ColorTokens;
};

export const Thumb: (thumbProps: ThumbProps) => ReactSliderProps['renderThumb'] =
  ({ trackHeight, size, colorToken }) =>
  (props) => (
    <StyledThumb
      {...(props as object)}
      colorToken={colorToken}
      height={size}
      trackHeight={trackHeight}
      width={size}
    />
  );
