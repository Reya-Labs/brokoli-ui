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
    thumbColorToken: 'primary500',
    trackColorToken: 'black800',
    value: 0,
  },
  render: Template,
};
