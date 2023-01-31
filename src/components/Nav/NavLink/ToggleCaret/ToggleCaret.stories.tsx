import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ToggleCaret } from './ToggleCaret';

export default {
  title: 'Components/ToggleCaret',
  component: ToggleCaret,
  argTypes: {},
} as ComponentMeta<typeof ToggleCaret>;

const Template: ComponentStory<typeof ToggleCaret> = (args) => <ToggleCaret {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
