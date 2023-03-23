import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TextField } from './index';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const WithTypographyToken = Template.bind({});
WithTypographyToken.args = {
  typographyToken: 'primaryBodyExtraLargeBold',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Username',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Password',
  type: 'password',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  tooltip: 'Make sure your password is secure and safe!',
  tooltipColorToken: 'lavenderWeb2',
};
