import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { RangeField } from '.';

export default {
  component: RangeField,
  title: 'Components/RangeField',
} as Meta<typeof RangeField>;

const Template: StoryFn<typeof RangeField> = (args) => {
  const [value, setValue] = useState(args.value || 0);

  return <RangeField {...args} value={value} onChange={setValue} />;
};

export const Default: StoryObj<typeof RangeField> = {
  args: {
    value: 0,
  },
  render: Template,
};

export const WithThumbColor: StoryObj<typeof RangeField> = {
  args: {
    thumbColorToken: 'primary500',
    value: 0,
  },
  render: Template,
};

export const WithTrackColor: StoryObj<typeof RangeField> = {
  args: {
    trackColorToken: 'black800',
    value: 0,
  },
  render: Template,
};

export const WithMarkConfig: StoryObj<typeof RangeField> = {
  args: {
    highlightEveryNthMark: 2,
    markColorToken: 'error500',
    markHighlightColorToken: 'warning500',
    step: 10,
    value: 0,
  },
  render: Template,
};

export const WithSize: StoryObj<typeof RangeField> = {
  args: {
    markHeight: 10,
    thumbColorToken: 'primary500',
    thumbSize: 8,
    trackColorToken: 'black800',
    trackHeight: 15,
    value: 0,
  },
  render: Template,
};

export const WithStep: StoryObj<typeof RangeField> = {
  args: {
    step: 4,
    thumbColorToken: 'primary500',
    trackColorToken: 'black800',
    value: 0,
  },
  render: Template,
};
