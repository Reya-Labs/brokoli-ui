import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RainbowLoader } from './index';

export default {
  args: {},
  component: RainbowLoader,
  title: 'Components/RainbowLoader',
} as ComponentMeta<typeof RainbowLoader>;

const Template: ComponentStory<typeof RainbowLoader> = (args) => (
  <div
    style={{
      width: 150,
    }}
  >
    <RainbowLoader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  height: 3,
};

export const WithText = Template.bind({});
WithText.args = {
  height: 3,
  text: 'Loading',
};
