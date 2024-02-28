import { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from '.';

export default {
  args: {
    backgroundColorToken: 'white900',
    hoverBackgroundColorToken: 'white800',
  },
  component: CloseButton,
  title: 'Components/CloseButton',
} as Meta<typeof CloseButton>;

export const Default: StoryObj<typeof CloseButton> = {
  args: {},
};

export const CustomColors: StoryObj<typeof CloseButton> = {
  args: {
    buttonBackgroundColor: 'black800',
    buttonHoverBackgroundColor: 'black900',
  },
};
