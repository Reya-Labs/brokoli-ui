import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TypographyWithTooltip } from './index';

export default {
  title: 'Components/TypographyWithTooltip',
  component: TypographyWithTooltip,
  args: {},
} as ComponentMeta<typeof TypographyWithTooltip>;

const Template: ComponentStory<typeof TypographyWithTooltip> = (args) => (
  <TypographyWithTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tooltip: 'Indeed! Created with ❤️!',
  colorToken: 'lavenderWeb',
  typographyToken: 'secondaryBodyMediumRegular',
  children: 'What a wonderful UI library!',
};
