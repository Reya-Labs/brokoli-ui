import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from '../Typography';
import { ExternalLink } from './index';

export default {
  args: {},
  component: ExternalLink,
  title: 'Components/ExternalLink',
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'visit our storybook link',
  colorToken: 'lavenderWeb',
  href: 'https://brokoli.voltz.xyz',
  typographyToken: 'primaryBodyXSmallRegular',
};

const WithinTextTemplate: ComponentStory<typeof ExternalLink> = (args) => (
  <Typography colorToken="lavenderWeb" typographyToken="primaryBodySmallRegular">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <ExternalLink {...args} /> Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
);
export const WithinText = WithinTextTemplate.bind({});
WithinText.args = {
  children: 'Brokoli wildly appears',
  colorToken: 'lavenderWeb',
  href: 'https://brokoli.voltz.xyz',
  typographyToken: 'primaryBodySmallBold',
};
