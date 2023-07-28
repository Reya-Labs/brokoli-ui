import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CurrencyField } from './index';

export default {
  args: {},
  component: CurrencyField,
  title: 'Components/Fields/CurrencyField',
} as ComponentMeta<typeof CurrencyField>;

const Template: ComponentStory<typeof CurrencyField> = (args) => {
  return <CurrencyField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  suffix: '%',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Notional',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  suffix: '%',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Notional',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  suffix: '%',
  tooltip: 'Input Notional!',
  tooltipColorToken: 'lavenderWeb2',
};
