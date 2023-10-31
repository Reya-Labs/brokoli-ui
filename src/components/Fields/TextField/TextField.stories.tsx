import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { TextField } from './index';

export default {
  args: {},
  component: TextField,
  title: 'Components/Fields/TextField',
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Default: StoryObj<typeof TextField> = {
  args: {},
  render: Template,
};

export const WithTypographyToken: StoryObj<typeof TextField> = {
  args: {
    typographyToken: 'primaryBodyExtraLargeBold',
  },

  render: Template,
};

export const WithLabel: StoryObj<typeof TextField> = {
  args: {
    label: 'Username',
    labelColorToken: 'white300',
    labelTypographyToken: 'primaryBodySmallRegular',
  },

  render: Template,
};

export const WithTooltip: StoryObj<typeof TextField> = {
  args: {
    label: 'Password',
    labelColorToken: 'white300',
    labelTypographyToken: 'primaryBodySmallRegular',
    placeHolder: 'Type your password',
    tooltip: 'Make sure your password is secure and safe!',
    tooltipColorToken: 'white300',
    type: 'password',
  },

  render: Template,
};
