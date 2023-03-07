import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Typography } from '../Typography';
import { AppLink } from './index';

export default {
  title: 'Components/AppLink',
  component: AppLink,
  args: {},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <HashRouter>
    <AppLink {...args} />
  </HashRouter>
);

export const Default = Template.bind({});
Default.args = {
  typographyToken: 'primaryBodyXSmallRegular',
  colorToken: 'skyBlueCrayola',
  children: 'Visit this app link!',
  to: '/app-link',
};

const WithinTextTemplate: ComponentStory<typeof AppLink> = (args) => (
  <HashRouter>
    <Typography colorToken="lavenderWeb" typographyToken="primaryBodySmallRegular">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. <AppLink {...args} /> Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </Typography>
  </HashRouter>
);
export const WithinText = WithinTextTemplate.bind({});
WithinText.args = {
  typographyToken: 'primaryBodySmallBold',
  colorToken: 'wildStrawberry',
  children: 'Lorem link',
  to: '/app-link',
};
