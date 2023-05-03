import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HorizontalLine } from './index';

export default {
  title: 'Components/HorizontalLine',
  component: HorizontalLine,
  args: {},
} as ComponentMeta<typeof HorizontalLine>;

const Template: ComponentStory<typeof HorizontalLine> = (args) => <HorizontalLine {...args} />;

export const Default = Template.bind({});
Default.args = {};
