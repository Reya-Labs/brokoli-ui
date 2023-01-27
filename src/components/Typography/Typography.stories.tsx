import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from './index';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  typographyToken: 'header1Black',
  colorToken: 'lavenderWeb',
};
