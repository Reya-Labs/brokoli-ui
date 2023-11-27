import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { PillSelector, PillSelectorProps } from '.';

export default {
  args: {},
  component: PillSelector,
  title: 'Components/PillSelector',
} as Meta<typeof PillSelector>;

const Template: StoryFn<typeof PillSelector> = (args) => {
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

export const Default: StoryObj<typeof PillSelector> = {
  args: {
    pillOptions,
    variant: 'compact',
  },

  render: Template,
};

export const CompactVariant: StoryObj<typeof PillSelector> = {
  args: {
    pillOptions,
    variant: 'compact',
  },

  render: Template,
};

export const RegularVariant: StoryObj<typeof PillSelector> = {
  args: {
    pillOptions,
    variant: 'regular',
  },

  render: Template,
};

export const WithAttentionPrefixText: StoryObj<typeof PillSelector> = {
  args: {
    attentionPrefixColorToken: 'primary',
    pillOptions: pillAttentionOptions,
  },

  render: Template,
};

export const WithAttentionPrefixTextColor: StoryObj<typeof PillSelector> = {
  args: {
    attentionPrefixColorToken: 'error',
    pillOptions: pillAttentionOptions,
  },

  render: Template,
};

export const WithError: StoryObj<typeof PillSelector> = {
  args: {
    error: true,
    pillOptions,
    variant: 'compact',
  },

  render: Template,
};

export const WithDisabled: StoryObj<typeof PillSelector> = {
  args: {
    disabled: true,
    pillOptions,
    variant: 'compact',
  },

  render: Template,
};

export const WithAttentionPrefixTextDisabled: StoryObj<typeof PillSelector> = {
  args: {
    attentionPrefixColorToken: 'error',
    disabled: true,
    pillOptions: pillAttentionOptions,
    variant: 'regular',
  },

  render: Template,
};

export const WithTooltip: StoryObj<typeof PillSelector> = {
  args: {
    disabled: false,
    label: 'Pill! Grab one!',
    pillOptions: pillOptions,
    tooltip: 'A wild selector!',
    variant: 'compact',
  },

  render: Template,
};
