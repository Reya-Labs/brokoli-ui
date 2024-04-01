import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Mark, MarkProps } from './Mark';
import { BoxContainer, StyledSlider } from './RangeField.styled';
import { Thumb, ThumbProps } from './Thumb';
import { Track } from './Track';

export type RangeFieldProps = {
  trackColorToken?: 'transparent' | ColorTokens;
  thumbColorToken: ThumbProps['colorToken'];
  value?: number;
  onChange?: (value: number) => void;
  thumbSize?: ThumbProps['size'];
  trackHeight?: number;
  // every Nth Mark element will be highlighted
  highlightEveryNthMark?: MarkProps['highlightEveryNthMark'];
  markHighlightColorToken?: MarkProps['highlightColorToken'];
  markColorToken?: MarkProps['colorToken'];
  markHeight: MarkProps['height'];
  step?: MarkProps['step'];
};

export const RangeField = ({
  highlightEveryNthMark = 5,
  thumbColorToken = 'white600',
  trackColorToken = 'primary500',
  markHighlightColorToken = 'primary500',
  markColorToken = 'primary800',
  trackHeight = 10,
  thumbSize = 6,
  markHeight = 6,
  onChange,
  value,
  step = 5,
}: RangeFieldProps) => {
  const handleOnChange = (reactSliderValue: number | readonly number[]) => {
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
    <BoxContainer data-testid="RangeField-BoxContainer" trackColorToken={trackColorToken}>
      <StyledSlider
        height={trackHeight}
        marks={highlightEveryNthMark}
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
        renderThumb={Thumb({ colorToken: thumbColorToken, size: thumbSize, trackHeight }) as never}
        // TODO: Nasty hack to avoid TS issues, react-slider isn't typed properly
        renderTrack={
          Track({ thumbHeight: thumbSize, trackColorToken: thumbColorToken, trackHeight }) as never
        }
        step={step}
        value={value}
        onChange={handleOnChange}
      />
    </BoxContainer>
  );
};
