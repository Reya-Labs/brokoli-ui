import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from '../Typography';
import { AppLink } from './index';

export default {
  args: {},
  component: AppLink,
  title: 'Components/AppLink',
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default: StoryObj<typeof AppLink> = {
  args: {
    children: 'Visit this app link!',
    colorToken: 'skyBlueCrayola',
    to: '/app-link',
    typographyToken: 'primaryBodyXSmallRegular',
  },

  render: Template,
};

const WithinTextTemplate: StoryFn<typeof AppLink> = (args) => (
  <Typography colorToken="white100" typographyToken="primaryBodySmallRegular">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. <AppLink {...args} /> Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
);

export const WithinText: StoryObj<typeof AppLink> = {
  args: {
    children: 'Lorem link',
    colorToken: 'wildStrawberry',
    to: '/app-link',
    typographyToken: 'primaryBodySmallBold',
  },

  render: WithinTextTemplate,
};
