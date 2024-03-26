import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '.';
import { SendIcon } from './SendIcon';

export default {
  argTypes: {},
  component: Button,
  title: 'Components/Button',
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    children: 'Default',
    typographyColorToken: 'white950',
  },
};

export const Rounded: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    children: 'Default',
    rounded: true,
    typographyColorToken: 'white950',
  },
};

export const WithHover: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    children: 'Default',
    hoverBackgroundColorToken: 'primary200',
    hoverBorderColorToken: 'primary700',
    hoverTypographyColorToken: 'primary500',
    typographyColorToken: 'white950',
  },
};

export const WithLoading: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    bottomLeftText: 'Bottom left text!',
    children: 'Default',
    loading: true,
  },
};

export const WithBottomLeftText: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    bottomLeftText: 'Bottom left text!',
    children: 'Default',
  },
};

export const WithCustomTypography: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    children: 'Default',
    typographyColorToken: 'error500',
    typographyToken: 'bodySmallRegular',
  },
};

export const WithBottomLeftTextAsError: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'error900',
    borderColorToken: 'error700',
    bottomLeftText: 'Bottom left text!',
    bottomLeftTextColorToken: 'error500',
    bottomLeftTextTypographyToken: 'bodySmallBold',
    children: 'Default',
    typographyColorToken: 'error500',
    typographyToken: 'bodySmallRegular',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'white100',
    borderColorToken: 'white900',
    children: 'Default',
    disabled: true,
    typographyColorToken: 'white950',
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    backgroundColorToken: 'black700',
    borderColorToken: 'white900',
    children: 'Default',
    hoverTypographyColorToken: 'primary500',
    iconLeft: <SendIcon />,
    iconRight: <SendIcon />,
    rounded: true,
    typographyColorToken: 'white100',
    typographyToken: 'bodyMediumRegular',
  },
};
