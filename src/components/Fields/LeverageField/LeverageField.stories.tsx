import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { LeverageField } from './index';

export default {
  args: {},
  component: LeverageField,
  title: 'Components/Fields/LeverageField',
} as ComponentMeta<typeof LeverageField>;

const Template: ComponentStory<typeof LeverageField> = (args) => {
  const [value, setValue] = useState<string | undefined>('5');

  return <LeverageField {...args} value={value} onLeverageChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Leverage',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  leverageOptions: ['10', '50', '100'],
  maxLeverageColorToken: 'lavenderWeb3',
  maxLeverageText: 'Max 8,000x Leverage',
  maxLeverageTypographyToken: 'primaryBodySmallRegular',
  value: '10',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Leverage',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  leverageOptions: ['10', '50', '100'],
  maxLeverageColorToken: 'lavenderWeb3',
  maxLeverageText: 'Max 8,000x Leverage',
  maxLeverageTypographyToken: 'primaryBodySmallRegular',
  value: '10',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
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
};

export const WithError = Template.bind({});
WithError.args = {
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
};
