import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AttentionIndicator } from './index';

export default {
  argTypes: {},
  component: AttentionIndicator,
  title: 'Components/AttentionIndicator',
} as ComponentMeta<typeof AttentionIndicator>;

const Template: ComponentStory<typeof AttentionIndicator> = (args) => (
  <AttentionIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  colorToken: 'wildStrawberry',
};
