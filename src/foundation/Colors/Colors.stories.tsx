import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { ColorTile } from './ColorTile/ColorTile';
import { isBrightColor } from './isBrightColor';
import { ColorTokens } from './types';

const AllColorsBox = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  z-index: 1;
  row-gap: 16px;
`;

const AllColors: StoryFn<typeof React.Fragment> = () => {
  const { colors } = useTheme();
  return (
    <AllColorsBox>
      {Object.keys(colors)
        .sort()
        .map((c, index) => (
          <ColorTile
            key={c}
            backgroundColor={colors[c as ColorTokens]}
            highlight={!isBrightColor(colors[c as ColorTokens])}
            name={c}
          />
        ))}
    </AllColorsBox>
  );
};

export default {
  component: AllColors,
  title: 'Foundation/Colors',
} as Meta<typeof AllColors>;

export const ColorsStory: StoryObj<typeof AllColors> = {
  args: {},
};
