import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Skeleton } from '.';

export default {
  args: {},
  component: Skeleton,
  title: 'Components/Skeleton',
} as Meta<typeof Skeleton>;

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    colorToken: 'white100',
  },
};

const CircularSkeleton = styled(Skeleton)`
  width: 50px;
  height: 50px;
`;
const CircularTemplate: StoryFn<typeof CircularSkeleton> = (args) => <CircularSkeleton {...args} />;

export const CircularVariant: StoryObj<typeof Skeleton> = {
  args: {
    colorToken: 'white100',
  },

  render: CircularTemplate,
};

export const WithTypographyToken: StoryObj<typeof Skeleton> = {
  args: {
    colorToken: 'white100',
    typographyToken: 'h1smallBold',
  },
};
