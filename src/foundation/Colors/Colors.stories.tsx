import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '../../themes/voltz/colors';
import { ColorTile } from './ColorTile/ColorTile';
import { ColorTokens } from './types';

export default {
  argTypes: {},
  component: ColorTile,
  title: 'Foundation/Colors',
} as Meta<typeof ColorTile>;

const AllColorsBox = styled('div')`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  gap: 16px;
  z-index: 1;
`;

const AllColorsTemplate: StoryFn<typeof React.Fragment> = () => (
  <AllColorsBox>
    {Object.keys(colors)
      .sort()
      .map((c, index) => (
        <ColorTile
          key={c}
          backgroundColor={colors[c as ColorTokens]}
          highlight={index % 9 > 4}
          name={c}
        />
      ))}
  </AllColorsBox>
);

export const Colors: StoryObj<typeof AllColorsTemplate> = {
  args: {},
  render: AllColorsTemplate,
};
