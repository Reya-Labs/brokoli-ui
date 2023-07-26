import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Page } from './index';

export default {
  args: {},
  component: Page,
  title: 'Components/Page',
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
