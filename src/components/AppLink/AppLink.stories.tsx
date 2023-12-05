import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '../Typography';
import { AppLink } from '.';

export default {
  args: {},
  component: AppLink,
  title: 'Components/AppLink',
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default: StoryObj<typeof AppLink> = {
  args: {
    children: 'Visit this app link!',
    colorToken: 'primary',
    to: '/app-link',
    typographyToken: 'bodyXsmallRegular',
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
    colorToken: 'error',
    to: '/app-link',
    typographyToken: 'primaryBodySmallBold',
  },

  render: WithinTextTemplate,
};

export const WithOpeningNewPage: StoryObj<typeof AppLink> = {
  args: {
    children: 'Visit this app link!',
    colorToken: 'primary',
    target: '_blank',
    to: 'https://brokoli.voltz.xyz',
    typographyToken: 'bodyXsmallRegular',
  },

  render: Template,
};

export const WithCustomComponentForLink: StoryObj<typeof AppLink> = {
  args: {
    Component: Link,
    children: 'Visit this app link!',
    colorToken: 'primary',
    to: '/app-link-via-react-router-dom',
    typographyToken: 'bodyXsmallRegular',
  },

  render: Template,
};
