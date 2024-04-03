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
    source: mockSource,
  },
};
export const WithHeight: StoryObj<typeof MarkdownPreview> = {
  args: {
    height: 250,
    source: mockSource,
  },
};

export const WithColorToken: StoryObj<typeof MarkdownPreview> = {
  args: {
    colorToken: 'error500',
    source: mockSource,
  },
};
