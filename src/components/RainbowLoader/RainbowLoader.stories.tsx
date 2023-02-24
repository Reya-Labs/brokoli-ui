import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RainbowLoader } from './index';

export default {
  title: 'Components/RainbowLoader',
  component: RainbowLoader,
  args: {},
} as ComponentMeta<typeof RainbowLoader>;

const Template: ComponentStory<typeof RainbowLoader> = (args) => <RainbowLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 150,
  height: 3,
};

export const WithText = Template.bind({});
WithText.args = {
  width: 150,
  height: 3,
  text: 'Loading',
};
