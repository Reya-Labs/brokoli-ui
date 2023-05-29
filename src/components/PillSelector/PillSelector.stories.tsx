import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { PillSelector } from './index';

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
      pillOptions={[
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
      ]}
      onPillClick={setActivePillId}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  disabled: true,
};
