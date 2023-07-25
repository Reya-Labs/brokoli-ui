import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Donut } from './index';

export default {
  title: 'Components/Donut',
  component: Donut,
  args: {},
} as ComponentMeta<typeof Donut>;

const Template: ComponentStory<typeof Donut> = (args) => <Donut {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 65,
  colorToken: 'orangeYellow',
};

export const WithHoleColorToken = Template.bind({});
WithHoleColorToken.args = {
  percentage: 23,
  colorToken: 'orangeYellow',
  holeColorToken: 'lavenderWeb',
};
