import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ProgressBar } from './index';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentageComplete: 88,
};