import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { Tooltip } from './index';

export default {
  args: {},
  component: Tooltip,
  title: 'Components/Tooltip',
} as Meta<typeof Tooltip>;

export const Default: StoryObj<typeof Tooltip> = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    trigger: (
      <Typography colorToken="white100" typographyToken="primaryHeader1Bold">
        A trigger
      </Typography>
    ),
  },
};

export const LongTooltip: StoryObj<typeof Tooltip> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    trigger: (
      <Typography colorToken="white100" typographyToken="primaryHeader1Bold">
        A trigger
      </Typography>
    ),
  },
};

export const CustomComponentTooltip: StoryObj<typeof Tooltip> = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Typography colorToken="white100" typographyToken="primaryHeader1Bold">
          CustomComponentTooltip
        </Typography>
        <Typography colorToken="white100" typographyToken="primaryBodyMediumRegular">
          Really it all fits
        </Typography>
        <Button variant="primary">A button! Click iit!</Button>
      </div>
    ),
    trigger: (
      <Typography colorToken="white100" typographyToken="primaryHeader1Bold">
        A trigger
      </Typography>
    ),
  },
};
