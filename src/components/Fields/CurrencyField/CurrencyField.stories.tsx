import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { CurrencyField } from '.';

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
    labelTypographyToken: 'bodySmallMedium',
    suffix: '%',
  },

  render: Template,
};

export const WithTooltip: StoryObj<typeof CurrencyField> = {
  args: {
    label: 'Notional',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    suffix: '%',
    tooltip: 'Input Notional!',
    tooltipColorToken: 'white300',
  },

  render: Template,
};

export const WithCustomStyleProps: StoryObj<typeof CurrencyField> = {
  args: {
    backgroundColorToken: 'primary800',
    borderColorToken: 'primary500',
    colorToken: 'primary300',
    disabledBackgroundColorToken: 'warning800',
    disabledBorderColorToken: 'warning500',
    disabledColorToken: 'warning500',
    errorBorderColorToken: 'error500',
    errorColorToken: 'error500',
    hoverBackgroundColorToken: 'secondary700',
    hoverBorderColorToken: 'primary800',
    hoverColorToken: 'primary700',
    hoverErrorBorderColorToken: 'error200',
    hoverErrorColorToken: 'error700',
    label: 'Notional',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    placeholderColorToken: 'secondary700',
    suffix: '%',
  },

  render: Template,
};
