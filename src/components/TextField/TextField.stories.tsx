import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TextField } from './index';

export default {
  args: {},
  component: TextField,
  title: 'Components/TextField',
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
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  placeHolder: 'Type your password',
  tooltip: 'Make sure your password is secure and safe!',
  tooltipColorToken: 'lavenderWeb2',
  type: 'password',
};
