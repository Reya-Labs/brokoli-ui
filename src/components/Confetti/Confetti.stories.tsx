import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Typography } from '../Typography';
import { Confetti } from './index';

export default {
  title: 'Components/Confetti',
  component: Confetti,
  args: {},
} as ComponentMeta<typeof Confetti>;

const ButtonTemplate: ComponentStory<typeof Confetti> = (args) => (
  <Confetti {...args}>
    <Button variant="primary">Confetti button!</Button>
  </Confetti>
);

export const ButtonConfetti = ButtonTemplate.bind({});
ButtonConfetti.args = {};

const DialogTemplate: ComponentStory<typeof Confetti> = (args) => (
  <Dialog open={true}>
    <Confetti {...args}>
      <Typography colorToken="lavenderWeb" typographyToken="primaryBodyExtraLargeBold">
        I am wrapped in confetti!
      </Typography>
    </Confetti>
  </Dialog>
);

export const DialogConfetti = DialogTemplate.bind({});
DialogConfetti.args = {};
