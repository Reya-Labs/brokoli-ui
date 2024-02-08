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

const tabs = [
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
];

export const Default: StoryObj<typeof Tabs> = {
  args: {
    activeTabColorToken: 'white100',
    activeTabId: '1',
    backgroundColorToken: 'black950',
    borderColorToken: 'black700',
    colorToken: 'black100',
    tabs,
    typographyToken: 'bodyMediumRegular',
  } as TabsProps,
  render: Template,
};

export const TabsWithDifferentHoverColor: StoryObj<typeof Tabs> = {
  args: {
    activeTabColorToken: 'white100',
    activeTabId: '1',
    backgroundColorToken: 'black950',
    borderColorToken: 'black700',
    colorToken: 'black100',
    hoverTabColorToken: 'white950',
    tabs,
    typographyToken: 'bodyMediumRegular',
  } as TabsProps,
  render: Template,
};

export const ContentInitiallyShown: StoryObj<typeof Tabs> = {
  args: {
    activeTabColorToken: 'white100',
    activeTabId: '1',
    backgroundColorToken: 'black950',
    borderColorToken: 'black700',
    colorToken: 'black100',
    contentHiding: {
      isHiddenInitially: false,
    },
    tabs,
    typographyToken: 'bodyMediumRegular',
  } as TabsProps,
  render: Template,
};

export const ContentInitiallyHidden: StoryObj<typeof Tabs> = {
  args: {
    activeTabColorToken: 'white100',
    activeTabId: '1',
    backgroundColorToken: 'black950',
    borderColorToken: 'black700',
    colorToken: 'black100',
    contentHiding: {
      isHiddenInitially: true,
    },
    tabs,
    typographyToken: 'bodyMediumRegular',
  } as TabsProps,
  render: Template,
};
