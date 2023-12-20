import { Meta, StoryObj } from '@storybook/react';

import { ExperiencePills } from './index';

export default {
  args: {},
  component: ExperiencePills,
  title: 'Components/ExperiencePills',
} as Meta<typeof ExperiencePills>;

export const Default: StoryObj<typeof ExperiencePills> = {
  args: {
    colorToken: 'primary',
    experiencePercentage: 19,
  },
};

export const ErrorVariant: StoryObj<typeof ExperiencePills> = {
  args: {
    colorToken: 'error',
    experiencePercentage: 87,
  },
};
