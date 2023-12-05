import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { ExclaimTooltip } from '.';

export default {
  args: {},
  component: ExclaimTooltip,
  title: 'Components/ExclaimTooltip',
} as Meta<typeof ExclaimTooltip>;

export const Default: StoryObj<typeof ExclaimTooltip> = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
  },
};

export const LongTooltip: StoryObj<typeof ExclaimTooltip> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const CustomComponentTooltip: StoryObj<typeof ExclaimTooltip> = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Typography colorToken="white100" typographyToken="h1SmallBold">
          CustomComponentTooltip
        </Typography>
        <Typography colorToken="white100" typographyToken="bodyMediumRegular">
          Really it all fits
        </Typography>
        <Button variant="primary">A button! Click iit!</Button>
      </div>
    ),
  },
};
