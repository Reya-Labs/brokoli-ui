import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Typography } from '../Typography';
import { Tabs, TabsProps } from '.';

export default {
  args: {},
  component: Tabs,
  title: 'Components/Tabs',
} as Meta<typeof Tabs>;

const Tab1 = () => (
  <div>
    <Typography colorToken="error500" typographyToken="bodyMediumRegular">
      Tab 1 Content goes here
    </Typography>
  </div>
);

const Tab2 = () => (
  <div>
    <Typography colorToken="primary500" typographyToken="bodyMediumRegular">
      Tab 2 Content goes here
    </Typography>
  </div>
);

const Tab3 = () => (
  <div>
    <Typography colorToken="warning500" typographyToken="bodyMediumRegular">
      Tab 3 Content goes here
    </Typography>
  </div>
);

const Template: StoryFn<typeof Tabs> = (args) => {
  const [activeTabId, setActiveTabId] = useState(args.activeTabId);
  return <Tabs {...args} activeTabId={activeTabId} onTabChange={setActiveTabId} />;
};

export const Default: StoryObj<typeof Tabs> = {
  args: {
    activeTabColorToken: 'white100',
    activeTabId: '1',
    backgroundColorToken: 'black900',
    borderColorToken: 'black700',
    colorToken: 'black100',
    tabs: [
      {
        Component: Tab1,
        id: '1',
        label: 'Tab 1',
      },
      {
        Component: Tab2,
        id: '2',
        label: 'Tab 2',
      },
      {
        Component: Tab3,
        id: '3',
        label: 'Tab 3',
      },
    ],
    typographyToken: 'bodyMediumRegular',
  } as TabsProps,
  render: Template,
};
