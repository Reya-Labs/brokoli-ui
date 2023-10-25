import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { RainbowLoader } from './index';

export default {
  args: {},
  component: RainbowLoader,
  title: 'Components/RainbowLoader',
} as Meta<typeof RainbowLoader>;

const Template: StoryFn<typeof RainbowLoader> = (args) => (
  <div
    style={{
      width: 150,
    }}
  >
    <RainbowLoader {...args} />
  </div>
);

export const Default: StoryObj<typeof RainbowLoader> = {
  args: {
    height: 3,
  },

  render: Template,
};

export const WithText: StoryObj<typeof RainbowLoader> = {
  args: {
    height: 3,
    text: 'Loading',
  },

  render: Template,
};
