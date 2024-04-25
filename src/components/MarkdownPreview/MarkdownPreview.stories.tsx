import { Meta, StoryObj } from '@storybook/react';

import { MarkdownPreview } from '.';
import { mockSource } from './mock';

export default {
  args: {},
  component: MarkdownPreview,
  title: 'Components/MarkdownPreview',
} as Meta<typeof MarkdownPreview>;

export const Default: StoryObj<typeof MarkdownPreview> = {
  args: {
    children: mockSource,
  },
};

export const WithColorToken: StoryObj<typeof MarkdownPreview> = {
  args: {
    children: mockSource,
    colorToken: 'error500',
  },
};
