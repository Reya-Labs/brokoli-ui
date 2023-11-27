import { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

export default {
  argTypes: {},
  component: Button,
  title: 'Components/Button',
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const WithLoading: StoryObj<typeof Button> = {
  args: {
    bottomLeftText: 'Bottom left text!',
    children: 'Default',
    loading: true,
    variant: 'primary',
  },
};

export const WithBottomLeftText: StoryObj<typeof Button> = {
  args: {
    bottomLeftText: 'Bottom left text!',
    children: 'Default',
    variant: 'primary',
  },
};

export const WithCustomTypography: StoryObj<typeof Button> = {
  args: {
    children: 'Default',
    typographyToken: 'primaryBodySmallRegular',
    variant: 'primary',
  },
};

export const WithBottomLeftTextAsError: StoryObj<typeof Button> = {
  args: {
    bottomLeftText: 'Bottom left text!',
    bottomLeftTextColorToken: 'error100',
    bottomLeftTextTypographyToken: 'primaryBodySmallBold',
    children: 'Default',
    variant: 'primary',
  },
};
