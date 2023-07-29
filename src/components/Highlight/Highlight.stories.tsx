import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Highlight } from './index';

export default {
  args: {},
  component: Highlight,
  title: 'Components/Highlight',
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => <Highlight {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'What a good day for hello! Indeed sir!',
  highlight: 'Hello',
};
