import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { ColorTokens } from '../../../../foundation/Colors';
import { StyledThumb, StyledValueTypography } from './Thumb.styled';

export type ThumbProps = {
  size: number;
  trackHeight: number;
  colorToken: ColorTokens;
  valueFormatter: (value: number) => string;
  disabled: boolean;
};

export const Thumb: (thumbProps: ThumbProps) => ReactSliderProps['renderThumb'] =
  ({ valueFormatter, disabled, trackHeight, size, colorToken }) =>
  (props, state) => (
    <StyledThumb
      {...(props as object)}
      colorToken={colorToken}
      disabled={disabled}
      height={size}
      trackHeight={trackHeight}
      value={state.valueNow}
      width={size}
    >
      <StyledValueTypography colorToken="white100" typographyToken="bodyXSmallRegular">
        {valueFormatter(state.valueNow)}
      </StyledValueTypography>
    </StyledThumb>
  );
