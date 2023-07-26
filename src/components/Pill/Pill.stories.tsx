import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Pill } from './index';

export default {
  args: {},
  component: Pill,
  title: 'Components/Pill',
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Headache pill',
  colorToken: 'wildStrawberry',
  typographyToken: 'primaryBodySmallRegular',
  variant: 'regular',
};

export const CompactVariant = Template.bind({});
CompactVariant.args = {
  children: 'Headache pill',
  colorToken: 'skyBlueCrayola',
  typographyToken: 'primaryBodyXSmallBold',
  variant: 'compact',
};
