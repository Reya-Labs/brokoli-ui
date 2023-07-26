import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './index';

export default {
  argTypes: {},
  component: Button,
  title: 'Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  bottomLeftText: 'Bottom left text!',
  children: 'Default',
  loading: true,
  variant: 'primary',
};

export const WithBottomLeftText = Template.bind({});
WithBottomLeftText.args = {
  bottomLeftText: 'Bottom left text!',
  children: 'Default',
  variant: 'primary',
};

export const WithCustomTypography = Template.bind({});
WithCustomTypography.args = {
  children: 'Default',
  typographyToken: 'primaryBodySmallRegular',
  variant: 'primary',
};

export const WithBottomLeftTextAsError = Template.bind({});
WithBottomLeftTextAsError.args = {
  bottomLeftText: 'Bottom left text!',
  bottomLeftTextColorToken: 'wildStrawberry',
  bottomLeftTextTypographyToken: 'primaryBodySmallBold',
  children: 'Default',
  variant: 'primary',
};
