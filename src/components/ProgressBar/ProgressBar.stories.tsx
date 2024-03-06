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
      <Typography colorToken="error100" typographyToken="bodyExtraLargeBold">
        Keeps growing
      </Typography>
      <ProgressBar percentageComplete={percentageComplete} />
    </React.Fragment>
  );
};
export const Default: StoryObj<typeof ProgressBar> = {
  args: {
    percentageComplete: 0,
  },
  render: Template,
};
