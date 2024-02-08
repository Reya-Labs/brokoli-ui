import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from '../Typography';
import { ExternalLink } from '.';

export default {
  args: {},
  component: ExternalLink,
  title: 'Components/ExternalLink',
} as Meta<typeof ExternalLink>;

export const Default: StoryObj<typeof ExternalLink> = {
  args: {
    children: 'visit our storybook link',
    colorToken: 'white100',
    href: 'https://brokoli.voltz.xyz',
    typographyToken: 'bodyXSmallRegular',
  },
};

const WithinTextTemplate: StoryFn<typeof ExternalLink> = (args) => (
  <Typography colorToken="white100" typographyToken="bodySmallRegular">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <ExternalLink {...args} /> Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
);

export const WithinText: StoryObj<typeof ExternalLink> = {
  args: {
    children: 'Brokoli wildly appears',
    colorToken: 'white100',
    href: 'https://brokoli.voltz.xyz',
    typographyToken: 'bodySmallBold',
  },

  render: WithinTextTemplate,
};

export const WithActiveAndHoverColor: StoryObj<typeof ExternalLink> = {
  args: {
    activeColorToken: 'primary500',
    children: 'visit our storybook link',
    colorToken: 'white100',
    hoverColorToken: 'white500',
    href: 'https://brokoli.voltz.xyz',
    typographyToken: 'bodyXSmallRegular',
  },
};
