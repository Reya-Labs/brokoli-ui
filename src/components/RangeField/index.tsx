import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ProgressBarProps } from '../ProgressBar';
import { BoxContainer, Segment, SegmentBox, StyledInput } from './RangeField.styled';

type RangeFieldProps = ProgressBarProps & {
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

export const RangeField = ({
  thumbColorToken = 'white600',
  trackColorToken = 'transparent',
  segmentHighlightColorToken = 'primary500',
  segmentColorToken = 'primary800',
  trackHeight = 10,
  thumbHeight = 6,
  onChange,
  value,
  step = 5,
}: RangeFieldProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    typeof onChange === 'function' && onChange(parseInt(event.target.value, 10));
  };

  return (
    <BoxContainer data-testid="RangeField-BoxContainer" trackColorToken={trackColorToken}>
      <StyledInput
        max={100}
        min={0}
        step={5}
        thumbColorToken={thumbColorToken}
        thumbHeight={thumbHeight}
        trackHeight={trackHeight}
        type="range"
        value={value}
        onChange={handleOnChange}
      />
      <SegmentBox>
        {Array.from({ length: 100 / step }, (_, index) => (
          <Segment
            key={index}
            colorToken={(index + 1) % step === 0 ? segmentHighlightColorToken : segmentColorToken}
            data-testid={`RangeField-Segment-${index}`}
            height={thumbHeight}
          />
        ))}
      </SegmentBox>
    </BoxContainer>
  );
};
