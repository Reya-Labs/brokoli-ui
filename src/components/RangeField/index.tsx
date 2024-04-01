import React from 'react';
import { ReactSliderProps } from 'react-slider';

import { ColorTokens } from '../../foundation/Colors';
import {
  BoxContainer,
  StyledMark,
  StyledSlider,
  StyledThumb,
  StyledTrack,
} from './RangeField.styled';

type RangeFieldProps = {
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

const Thumb: ReactSliderProps['renderThumb'] = (props) => (
  <StyledThumb size={6} thumbColorToken="white100" {...(props as object)} />
);

const Track: ReactSliderProps['renderTrack'] = (props, state) => (
  <StyledTrack trackColorToken="white100" {...(props as object)} index={state.index} />
);

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
        renderMark={(props) => {
          const keyAsNumber = !props.key
            ? 0
            : typeof props.key === 'number' || typeof props.key === 'bigint'
            ? Number(props.key)
            : parseInt(props.key, 10);
          if (keyAsNumber === 0) {
            return null;
          }
          const isHighlighted = keyAsNumber % (step * NTH_MARKDOWN_HIGHLIGHT) === 0;
          return (
            <StyledMark
              {...(props as object)}
              height={6}
              colorToken={isHighlighted ? 'white100' : 'black100'}
            />
          );
        }}
        step={step}
        value={value}
        onChange={handleOnChange}
        max={100}
        // TODO: nasty hack to get it working
        renderTrack={Track as never}
        min={0}
        // TODO: nasty hack to get it working
        renderThumb={Thumb as never}
      />
    </BoxContainer>
  );
};
