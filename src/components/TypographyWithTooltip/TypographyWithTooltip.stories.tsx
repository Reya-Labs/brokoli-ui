import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TypographyWithTooltip } from './index';

export default {
  args: {},
  component: TypographyWithTooltip,
  title: 'Components/TypographyWithTooltip',
} as ComponentMeta<typeof TypographyWithTooltip>;

const Template: ComponentStory<typeof TypographyWithTooltip> = (args) => (
  <TypographyWithTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'What a wonderful UI library!',
  colorToken: 'lavenderWeb',
  tooltip: 'Created with ❤️!',
  typographyToken: 'secondaryBodyMediumRegular',
};
