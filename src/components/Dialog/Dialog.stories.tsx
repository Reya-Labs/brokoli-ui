import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { Dialog } from '.';

export default {
  args: {},
  component: Dialog,
  title: 'Components/Dialog',
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(args.open);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleDialog = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Button
        borderColorToken="white100"
        typographyColorToken="white100"
        typographyToken="bodyLargeBold"
        onClick={handleToggleDialog}
      >
        {open ? 'Close Dialog' : 'Open Dialog'}
      </Button>
      <br />
      <Typography colorToken="error100" typographyToken="bodyExtraLargeBold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Dialog {...args} open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export const Default: StoryObj<typeof Dialog> = {
  args: {
    children: (
      <div>
        <Typography colorToken="white100" typographyToken="h2Bold">
          Title.
        </Typography>
        <br />
        <Typography colorToken="white100" typographyToken="bodyLargeRegular">
          Description text using styled components.
        </Typography>
        <br />
        <TypographyWithTooltip
          colorToken="white100"
          tooltip="Tooltip description"
          typographyToken="bodyMediumMedium"
        >
          Sample tooltip usage in dialog.
        </TypographyWithTooltip>
      </div>
    ),
  },
  render: Template,
};
