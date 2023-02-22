import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CurrencyField } from './index';

export default {
  title: 'Components/CurrencyField',
  component: CurrencyField,
  args: {},
} as ComponentMeta<typeof CurrencyField>;

const Template: ComponentStory<typeof CurrencyField> = (args) => {
  return <CurrencyField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  suffix: '%',
};
