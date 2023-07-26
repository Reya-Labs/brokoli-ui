import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Ellipsis } from './index';

export default {
  args: {},
  component: Ellipsis,
  title: 'Components/Ellipsis',
} as ComponentMeta<typeof Ellipsis>;

const Template: ComponentStory<typeof Ellipsis> = (args) => <Ellipsis {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'lavenderWeb',
};
