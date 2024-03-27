import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Typography } from '../Typography';
import { ProgressBar } from '.';

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => {
  const [percentageComplete, setPercentageComplete] = useState(args.percentageComplete || 0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setPercentageComplete((percentageComplete + 5) % 100);
    }, 1000);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [percentageComplete]);

  return (
    <React.Fragment>
      <Typography colorToken="white100" typographyToken="bodyExtraLargeBold">
        Keeps growing - integrator text
      </Typography>
      <ProgressBar {...args} percentageComplete={percentageComplete} />
    </React.Fragment>
  );
};

export const Default: StoryObj<typeof ProgressBar> = {
  args: {
    percentageComplete: 0,
  },
  render: Template,
};

export const WithBarColor: StoryObj<typeof ProgressBar> = {
  args: {
    barColorToken: 'warning200',
    percentageComplete: 0,
  },
  render: Template,
};

export const WithBackgroundColor: StoryObj<typeof ProgressBar> = {
  args: {
    backgroundColorToken: 'error700',
    percentageComplete: 0,
  },
  render: Template,
};

export const WithHeight: StoryObj<typeof ProgressBar> = {
  args: {
    height: 12,
    percentageComplete: 0,
  },
  render: Template,
};

export const WithRounded: StoryObj<typeof ProgressBar> = {
  args: {
    percentageComplete: 0,
    rounded: true,
  },
  render: Template,
};
