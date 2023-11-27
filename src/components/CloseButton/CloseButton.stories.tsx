import { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from '.';

export default {
  args: {},
  component: CloseButton,
  title: 'Components/CloseButton',
} as Meta<typeof CloseButton>;

export const Default: StoryObj<typeof CloseButton> = {
  args: {},
};
