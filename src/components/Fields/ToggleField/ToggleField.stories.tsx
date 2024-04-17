import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { ToggleField } from '.';

export default {
  args: {},
  component: ToggleField,
  title: 'Components/Fields/ToggleField',
} as Meta<typeof ToggleField>;

const Template: StoryFn<typeof ToggleField> = (args) => {
  const [checked, setChecked] = useState<boolean>(args.checked);
  return <ToggleField {...args} checked={checked} onChange={setChecked} />;
};

export const Default: StoryObj<typeof ToggleField> = {
  args: {},
  render: Template,
};

export const WithChecked: StoryObj<typeof ToggleField> = {
  args: {
    checked: true,
  },
  render: Template,
};

export const WithDisabled: StoryObj<typeof ToggleField> = {
  args: {
    checked: true,
    disabled: true,
  },
  render: Template,
};
