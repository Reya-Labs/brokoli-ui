import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PercentageTypography } from './index';

export default {
  title: 'Components/PercentageTypography',
  component: PercentageTypography,
  args: {},
} as ComponentMeta<typeof PercentageTypography>;

const Template: ComponentStory<typeof PercentageTypography> = (args) => (
  <PercentageTypography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  typographyToken: 'secondaryBodyMediumRegular',
};
