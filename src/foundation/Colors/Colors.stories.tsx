import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { colors, ColorTokens } from './colors';
import { ColorTile } from './ColorTile/ColorTile';

export default {
  argTypes: {},
  component: ColorTile,
  title: 'Foundation/Colors',
} as ComponentMeta<typeof ColorTile>;

const AllColorsBox = styled('div')`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
  gap: 16px;
  z-index: 1;
`;

const AllColorsTemplate: ComponentStory<typeof React.Fragment> = () => (
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

export const Colors = AllColorsTemplate.bind({});
Colors.args = {};
