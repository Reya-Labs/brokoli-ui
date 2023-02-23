import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const WithBottomLeftText = Template.bind({});
WithBottomLeftText.args = {
  children: 'Default',
  bottomLeftText: 'Bottom left text!',
};
