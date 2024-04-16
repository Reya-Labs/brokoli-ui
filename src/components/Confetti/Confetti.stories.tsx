import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Typography } from '../Typography';
import { Confetti } from '.';

export default {
  args: {},
  component: Confetti,
  title: 'Components/Confetti',
} as Meta<typeof Confetti>;

const ButtonTemplate: StoryFn<typeof Confetti> = (args) => (
  <Confetti {...args}>
    <Button
      borderColorToken="white800"
      hoverBorderColorToken="white500"
      typographyColorToken="white100"
    >
      Confetti button!
    </Button>
  </Confetti>
);

export const ButtonConfetti: StoryObj<typeof Confetti> = {
  args: {},
  render: ButtonTemplate,
};

const DialogTemplate: StoryFn<typeof Confetti> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Confetti {...args}>
        <Typography colorToken="white100" typographyToken="bodyExtraLargeBold">
          I am wrapped in confetti!
        </Typography>
      </Confetti>
    </Dialog>
  );
};

export const DialogConfetti: StoryObj<typeof Confetti> = {
  args: {},
  render: DialogTemplate,
};
