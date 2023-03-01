import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ExternalLink } from './index';

export default {
  title: 'Components/ExternalLink',
  component: ExternalLink,
  args: {},
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  typographyToken: 'primaryBodyXSmallRegular',
  colorToken: 'lavenderWeb',
  children: 'visit our storybook link',
  href: 'https://brokoli.voltz.xyz',
};
