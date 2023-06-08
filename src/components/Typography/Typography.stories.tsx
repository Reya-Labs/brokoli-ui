import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  typographyToken: 'primaryHeader1Black',
  colorToken: 'lavenderWeb',
};

export const RainbowVariant = Template.bind({});
RainbowVariant.args = {
  children: 'Rainbow Variant',
  typographyToken: 'primaryHeader1Black',
  colorToken: 'rainbow',
};
