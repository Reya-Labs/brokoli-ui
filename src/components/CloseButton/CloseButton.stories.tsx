import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CloseButton } from './index';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
  args: {},
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
