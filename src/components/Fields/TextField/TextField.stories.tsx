import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { TextField } from '.';

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
    typographyToken: 'bodyExtraLargeBold',
  },

  render: Template,
};

export const WithLabel: StoryObj<typeof TextField> = {
  args: {
    label: 'Username',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
  },

  render: Template,
};

export const WithTooltip: StoryObj<typeof TextField> = {
  args: {
    label: 'Password',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    placeHolder: 'Type your password',
    tooltip: 'Make sure your password is secure and safe!',
    tooltipColorToken: 'white300',
    type: 'password',
  },

  render: Template,
};

export const WithBottomLeftText: StoryObj<typeof TextField> = {
  args: {
    bottomLeftText: 'Bottom left text',
    bottomLeftTextColorToken: 'error500',
    bottomLeftTextTypographyToken: 'bodySmallMedium',
    label: 'Username',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
  },

  render: Template,
};

export const WithCustomStyle: StoryObj<typeof TextField> = {
  args: {
    backgroundColorToken: 'primary800',
    borderColorToken: 'primary500',
    colorToken: 'primary300',
    disabledBackgroundColorToken: 'warning800',
    disabledBorderColorToken: 'warning500',
    disabledColorToken: 'warning500',
    errorBorderColorToken: 'error500',
    errorColorToken: 'error500',
    hoverBackgroundColorToken: 'secondary700',
    hoverBorderColorToken: 'primary800',
    hoverColorToken: 'primary700',
    hoverErrorBorderColorToken: 'error200',
    hoverErrorColorToken: 'error700',
    label: 'Username',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    placeholderColorToken: 'secondary700',
  },

  render: Template,
};
