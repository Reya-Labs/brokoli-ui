import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Mark } from './Mark';
import { BoxContainer, StyledSlider } from './RangeField.styled';
import { Thumb } from './Thumb';
import { Track } from './Track';

export type RangeFieldProps = {
  trackColorToken?: 'transparent' | ColorTokens;
  thumbColorToken: ColorTokens;
  value?: number;
  onChange?: (value: number) => void;
  thumbHeight?: number;
  trackHeight?: number;
  step?: number;
  segmentHighlightColorToken?: ColorTokens;
  segmentColorToken?: ColorTokens;
};

// every Nth Markdown element will be highlighted
const NTH_MARKDOWN_HIGHLIGHT = 5;

export const RangeField = ({
  thumbColorToken = 'white600',
  trackColorToken = 'primary500',
  segmentHighlightColorToken = 'primary500',
  segmentColorToken = 'primary800',
  trackHeight = 10,
  thumbHeight = 6,
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
        height={6}
        marks={5}
        max={100}
        min={0}
        renderMark={Mark}
        renderThumb={Thumb as never}
        renderTrack={Track as never}
        step={step}
        value={value}
        onChange={handleOnChange}
      />
    </BoxContainer>
  );
};
