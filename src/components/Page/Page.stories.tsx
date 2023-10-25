import { Meta, StoryObj } from '@storybook/react';

import { Page } from './index';

export default {
  args: {},
  component: Page,
  title: 'Components/Page',
} as Meta<typeof Page>;

export const Default: StoryObj<typeof Page> = {
  args: {},
};
