import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Donut } from './index';

export default {
  args: {},
  component: Donut,
  title: 'Components/Donut',
} as ComponentMeta<typeof Donut>;

const Template: ComponentStory<typeof Donut> = (args) => <Donut {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'orangeYellow',
  percentage: 65,
};

export const WithHoleColorToken = Template.bind({});
WithHoleColorToken.args = {
  colorToken: 'orangeYellow',
  holeColorToken: 'lavenderWeb',
  percentage: 23,
};
