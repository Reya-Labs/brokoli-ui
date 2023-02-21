import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TokenTypography } from './index';

export default {
  title: 'Components/TokenTypography',
  component: TokenTypography,
  args: {},
} as ComponentMeta<typeof TokenTypography>;

const Template: ComponentStory<typeof TokenTypography> = (args) => <TokenTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 100,
  colorToken: 'lavenderWeb',
  token: '%',
  typographyToken: 'secondaryBodyMediumRegular',
};
