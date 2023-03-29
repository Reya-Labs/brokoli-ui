import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { LeverageField } from './index';

export default {
  title: 'Components/LeverageField',
  component: LeverageField,
  args: {},
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
  value: '10',
  leverageOptions: ['10', '50', '100'],
  maxLeverageColorToken: 'lavenderWeb3',
  maxLeverageTypographyToken: 'primaryBodySmallRegular',
  maxLeverageText: 'Max 8,000x Leverage',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Leverage',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  value: '10',
  disabled: true,
  leverageOptions: ['10', '50', '100'],
  maxLeverageColorToken: 'lavenderWeb3',
  maxLeverageTypographyToken: 'primaryBodySmallRegular',
  maxLeverageText: 'Max 8,000x Leverage',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: 'Leverage',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  tooltip: 'Input leverage!',
  tooltipColorToken: 'lavenderWeb2',
  value: '10',
  leverageOptions: ['10', '50', '100'],
  maxLeverageColorToken: 'lavenderWeb3',
  maxLeverageTypographyToken: 'primaryBodySmallRegular',
  maxLeverageText: 'Max 8,000x Leverage',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Leverage',
  labelColorToken: 'lavenderWeb2',
  labelTypographyToken: 'primaryBodySmallRegular',
  tooltip: 'Input leverage!',
  tooltipColorToken: 'lavenderWeb2',
  value: '9000',
  error: true,
  leverageOptions: ['10', '50', '100'],
  maxLeverageColorToken: 'wildStrawberry3',
  maxLeverageTypographyToken: 'primaryBodySmallRegular',
  maxLeverageText: 'Max 8,000x Leverage',
};
