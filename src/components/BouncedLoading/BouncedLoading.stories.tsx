import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BouncedLoading } from './index';

export default {
  args: {},
  component: BouncedLoading,
  title: 'Components/BouncedLoading',
} as ComponentMeta<typeof BouncedLoading>;

const Template: ComponentStory<typeof BouncedLoading> = (args) => <BouncedLoading {...args} />;

export const Default = Template.bind({});
Default.args = {};
