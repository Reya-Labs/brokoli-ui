import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { Dialog } from './index';

export default {
  args: {},
  component: Dialog,
  title: 'Components/Dialog',
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => (
  <React.Fragment>
    <Typography colorToken="wildStrawberry" typographyToken="primaryBodyExtraLargeBold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
    <Dialog {...args} />
  </React.Fragment>
);

export const Default: StoryObj<typeof Dialog> = {
  args: {
    children: (
      <React.Fragment>
        <Typography colorToken="lavenderWeb" typographyToken="primaryBodyLargeRegular">
          This library is created using styled components from @emotion/styled.
        </Typography>
        <br />
        <Typography colorToken="white400" typographyToken="primaryBodyMediumRegular">
          It is an UI design language and React UI library powered by 🥦🥦🥦 and ☕
        </Typography>
        <br />
        <TypographyWithTooltip
          colorToken="lavenderWeb"
          tooltip="Created with ❤️!"
          typographyToken="secondaryBodyMediumRegular"
        >
          Tooltips in dialog? ✅
        </TypographyWithTooltip>
      </React.Fragment>
    ),
    open: true,
  },

  render: Template,
};
