import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

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
    hoverTypographyToken: 'primary500',
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
    borderColorToken: 'white900',
    bottomLeftText: 'Bottom left text!',
    bottomLeftTextColorToken: 'error100',
    bottomLeftTextTypographyToken: 'bodySmallBold',
    children: 'Default',
    typographyColorToken: 'error500',
    typographyToken: 'bodySmallRegular',
  },
};
