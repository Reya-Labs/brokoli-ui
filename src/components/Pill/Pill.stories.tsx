import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Pill } from './index';

export default {
  title: 'Components/Pill',
  component: Pill,
  args: {},
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'wildStrawberry',
  children: 'Headache pill',
  typographyToken: 'primaryBodySmallRegular',
  variant: 'regular',
};

export const CompactVariant = Template.bind({});
CompactVariant.args = {
  colorToken: 'skyBlueCrayola',
  children: 'Headache pill',
  typographyToken: 'primaryBodyXSmallBold',
  variant: 'compact',
};
