import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { CurrencyField } from './index';

export default {
  args: {},
  component: CurrencyField,
  title: 'Components/Fields/CurrencyField',
} as Meta<typeof CurrencyField>;

const Template: StoryFn<typeof CurrencyField> = (args) => {
  return <CurrencyField {...args} />;
};

export const Default: StoryObj<typeof CurrencyField> = {
  args: {
    suffix: '%',
  },

  render: Template,
};

export const WithLabel: StoryObj<typeof CurrencyField> = {
  args: {
    label: 'Notional',
    labelColorToken: 'white300',
    labelTypographyToken: 'primaryBodySmallRegular',
    suffix: '%',
  },

  render: Template,
};

export const WithTooltip: StoryObj<typeof CurrencyField> = {
  args: {
    label: 'Notional',
    labelColorToken: 'white300',
    labelTypographyToken: 'primaryBodySmallRegular',
    suffix: '%',
    tooltip: 'Input Notional!',
    tooltipColorToken: 'white300',
  },

  render: Template,
};
