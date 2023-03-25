import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
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
  children: 'Default',
  loading: true,
  bottomLeftText: 'Bottom left text!',
  variant: 'primary',
};

export const WithBottomLeftText = Template.bind({});
WithBottomLeftText.args = {
  children: 'Default',
  bottomLeftText: 'Bottom left text!',
  variant: 'primary',
};

export const WithCustomTypography = Template.bind({});
WithCustomTypography.args = {
  children: 'Default',
  variant: 'primary',
  typographyToken: 'primaryBodySmallRegular',
};

export const WithBottomLeftTextAsError = Template.bind({});
WithBottomLeftTextAsError.args = {
  children: 'Default',
  bottomLeftText: 'Bottom left text!',
  bottomLeftTextColorToken: 'wildStrawberry',
  bottomLeftTextTypographyToken: 'primaryBodySmallBold',
  variant: 'primary',
};
