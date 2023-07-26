import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from './index';

export default {
  component: Typography,
  title: 'Components/Typography',
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  colorToken: 'lavenderWeb',
  typographyToken: 'primaryHeader1Black',
};

export const RainbowVariant = Template.bind({});
RainbowVariant.args = {
  children: 'Rainbow Variant',
  colorToken: 'rainbow',
  typographyToken: 'primaryHeader1Black',
};
