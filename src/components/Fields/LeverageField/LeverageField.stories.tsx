import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { LeverageField } from './index';

export default {
  args: {},
  component: LeverageField,
  title: 'Components/Fields/LeverageField',
} as Meta<typeof LeverageField>;

const Template: StoryFn<typeof LeverageField> = (args) => {
  const [value, setValue] = useState<string | undefined>('5');

  return <LeverageField {...args} value={value} onLeverageChange={setValue} />;
};

export const Default: StoryObj<typeof LeverageField> = {
  args: {
    label: 'Leverage',
    labelColorToken: 'lavenderWeb2',
    labelTypographyToken: 'primaryBodySmallRegular',
    leverageOptions: ['10', '50', '100'],
    maxLeverageColorToken: 'lavenderWeb3',
    maxLeverageText: 'Max 8,000x Leverage',
    maxLeverageTypographyToken: 'primaryBodySmallRegular',
    value: '10',
  },

  render: Template,
};

export const Disabled: StoryObj<typeof LeverageField> = {
  args: {
    disabled: true,
    label: 'Leverage',
    labelColorToken: 'lavenderWeb2',
    labelTypographyToken: 'primaryBodySmallRegular',
    leverageOptions: ['10', '50', '100'],
    maxLeverageColorToken: 'lavenderWeb3',
    maxLeverageText: 'Max 8,000x Leverage',
    maxLeverageTypographyToken: 'primaryBodySmallRegular',
    value: '10',
  },

  render: Template,
};

export const WithTooltip: StoryObj<typeof LeverageField> = {
  args: {
    label: 'Leverage',
    labelColorToken: 'lavenderWeb2',
    labelTypographyToken: 'primaryBodySmallRegular',
    leverageOptions: ['10', '50', '100'],
    maxLeverageColorToken: 'lavenderWeb3',
    maxLeverageText: 'Max 8,000x Leverage',
    maxLeverageTypographyToken: 'primaryBodySmallRegular',
    tooltip: 'Input leverage!',
    tooltipColorToken: 'lavenderWeb2',
    value: '10',
  },

  render: Template,
};

export const WithError: StoryObj<typeof LeverageField> = {
  args: {
    error: true,
    label: 'Leverage',
    labelColorToken: 'lavenderWeb2',
    labelTypographyToken: 'primaryBodySmallRegular',
    leverageOptions: ['10', '50', '100'],
    maxLeverageColorToken: 'wildStrawberry3',
    maxLeverageText: 'Max 8,000x Leverage',
    maxLeverageTypographyToken: 'primaryBodySmallRegular',
    tooltip: 'Input leverage!',
    tooltipColorToken: 'lavenderWeb2',
    value: '9000',
  },

  render: Template,
};
