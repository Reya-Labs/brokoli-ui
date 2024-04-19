import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { Mark, MarkProps } from './Mark';
import { Box, StyledSlider } from './RangeField.styled';
import { Thumb, ThumbProps } from './Thumb';
import { Track } from './Track';

export type RangeFieldProps = {
  disabled?: boolean;
  highlightEveryNthMark?: MarkProps['highlightEveryNthMark'];
  markColorToken?: MarkProps['colorToken'];
  markHeight: MarkProps['height'];
  markHighlightColorToken?: MarkProps['highlightColorToken'];
  onChange?: (value: number) => void;
  step?: MarkProps['step'];
  thumbColorToken: ThumbProps['colorToken'];
  thumbSize?: ThumbProps['size'];
  trackColorToken?: 'transparent' | ColorTokens;
  trackHeight?: number;
  value?: number;
  valueFormatter?: ThumbProps['valueFormatter'];
};
const defaultValueFormatter = (value: number) => `${value}%`;
export const RangeField = ({
  highlightEveryNthMark = 5,
  thumbColorToken = 'white200',
  trackColorToken = 'black600',
  markHighlightColorToken = 'white100',
  markColorToken = 'white950',
  trackHeight = 10,
  thumbSize = 6,
  markHeight = 6,
  onChange,
  value,
  step = 5,
  valueFormatter = defaultValueFormatter,
  disabled = false,
}: RangeFieldProps) => {
  const handleOnChange = (reactSliderValue: number | readonly number[]) => {
    if (disabled) {
      return;
    }
    if (
      typeof reactSliderValue !== 'number' ||
      typeof onChange !== 'function' ||
      isNaN(reactSliderValue)
    ) {
      return;
    }
    onChange(reactSliderValue);
  };

  return (
    <Box data-testid="RangeField-Box" trackColorToken={trackColorToken}>
      <StyledSlider
        disabled={disabled}
        height={trackHeight}
        marks={step}
        max={100}
        min={0}
        renderMark={Mark({
          colorToken: markColorToken,
          height: markHeight,
          highlightColorToken: markHighlightColorToken,
          highlightEveryNthMark,
          step,
          trackHeight,
        })}
        // TODO: Nasty hack to avoid TS issues, react-slider isn't typed properly
        renderThumb={
          Thumb({
            colorToken: thumbColorToken,
            disabled,
            size: thumbSize,
            trackHeight,
            valueFormatter,
          }) as never
        }
        // TODO: Nasty hack to avoid TS issues, react-slider isn't typed properly
        renderTrack={
          Track({ thumbHeight: thumbSize, trackColorToken: thumbColorToken, trackHeight }) as never
        }
        step={step}
        value={value}
        onChange={disabled ? undefined : handleOnChange}
      />
    </Box>
  );
};
