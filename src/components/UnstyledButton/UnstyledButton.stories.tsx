import { Meta, StoryObj } from '@storybook/react';

import { UnstyledButton } from '.';

export default {
  args: {},
  component: UnstyledButton,
  title: 'Components/UnstyledButton',
} as Meta<typeof UnstyledButton>;

export const Default: StoryObj<typeof UnstyledButton> = {
  args: {
    children: 'Click Me',
  },
};

export const Inline: StoryObj<typeof UnstyledButton> = {
  args: {
    children: 'Inline Button',
    display: 'inline-block',
  },
};

export const Invisible: StoryObj<typeof UnstyledButton> = {
  args: {
    children: 'Invisible Button',
    display: 'none',
  },
};
