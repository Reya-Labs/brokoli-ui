import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { PillSelector, PillSelectorProps } from './index';

export default {
  args: {},
  component: PillSelector,
  title: 'Components/PillSelector',
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
    attentionPrefixText: '10',
    id: '1',
    label: 'Option 1',
  },
  {
    attentionPrefixText: '2',
    id: '2',
    label: 'Option 2',
  },
  {
    attentionPrefixText: '3',
    id: '3',
    label: 'Option 3',
  },
];
export const Default = Template.bind({});
Default.args = {
  pillOptions,
  variant: 'compact',
};

export const CompactVariant = Template.bind({});
CompactVariant.args = {
  pillOptions,
  variant: 'compact',
};

export const RegularVariant = Template.bind({});
RegularVariant.args = {
  pillOptions,
  variant: 'regular',
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
  pillOptions,
  variant: 'compact',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  disabled: true,
  pillOptions,
  variant: 'compact',
};

export const WithAttentionPrefixTextDisabled = Template.bind({});
WithAttentionPrefixTextDisabled.args = {
  attentionPrefixColorToken: 'wildStrawberry',
  disabled: true,
  pillOptions: pillAttentionOptions,
  variant: 'regular',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  disabled: false,
  label: 'Pill! Grab one!',
  pillOptions: pillOptions,
  tooltip: 'A wild selector!',
  variant: 'compact',
};
