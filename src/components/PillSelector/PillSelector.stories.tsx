import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { PillSelector, PillSelectorProps } from './index';

export default {
  title: 'Components/PillSelector',
  component: PillSelector,
  args: {},
} as ComponentMeta<typeof PillSelector>;

const Template: ComponentStory<typeof PillSelector> = (args) => {
  const [activePillId, setActivePillId] = useState('1');

  return (
    <PillSelector
      {...args}
      activePillId={activePillId}
      pillOptions={args.pillOptions}
      onPillClick={setActivePillId}
    />
  );
};

const pillOptions: PillSelectorProps['pillOptions'] = [
  {
    id: '1',
    label: 'Option 1',
  },
  {
    id: '2',
    label: 'Option 2',
  },
  {
    id: '3',
    label: 'Option 3',
  },
];
const pillAttentionOptions: PillSelectorProps['pillOptions'] = [
  {
    id: '1',
    label: 'Option 1',
    attentionPrefixText: '10',
  },
  {
    id: '2',
    label: 'Option 2',
    attentionPrefixText: '2',
  },
  {
    id: '3',
    label: 'Option 3',
    attentionPrefixText: '3',
  },
];
export const Default = Template.bind({});
Default.args = {
  variant: 'compact',
  pillOptions,
};

export const CompactVariant = Template.bind({});
CompactVariant.args = {
  variant: 'compact',
  pillOptions,
};

export const RegularVariant = Template.bind({});
RegularVariant.args = {
  variant: 'regular',
  pillOptions,
};

export const WithAttentionPrefixText = Template.bind({});
WithAttentionPrefixText.args = {
  attentionPrefixColorToken: 'skyBlueCrayola',
  pillOptions: pillAttentionOptions,
};

export const WithAttentionPrefixTextColor = Template.bind({});
WithAttentionPrefixTextColor.args = {
  attentionPrefixColorToken: 'wildStrawberry',
  pillOptions: pillAttentionOptions,
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  variant: 'compact',
  pillOptions,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  disabled: true,
  variant: 'compact',
  pillOptions,
};

export const WithAttentionPrefixTextDisabled = Template.bind({});
WithAttentionPrefixTextDisabled.args = {
  disabled: true,
  variant: 'regular',
  attentionPrefixColorToken: 'wildStrawberry',
  pillOptions: pillAttentionOptions,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  disabled: false,
  variant: 'compact',
  pillOptions: pillOptions,
  tooltip: 'A wild selector!',
  label: 'Pill! Grab one!',
};
