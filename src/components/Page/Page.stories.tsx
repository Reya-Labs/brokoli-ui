import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Page } from './index';

export default {
  title: 'Components/Page',
  component: Page,
  args: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
