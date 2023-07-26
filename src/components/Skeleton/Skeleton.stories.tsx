import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Skeleton } from './index';

export default {
  args: {},
  component: Skeleton,
  title: 'Components/Skeleton',
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorToken: 'lavenderWeb',
};

const CircularSkeleton = styled(Skeleton)`
  width: 50px;
  height: 50px;
`;
const CircularTemplate: ComponentStory<typeof CircularSkeleton> = (args) => (
  <CircularSkeleton {...args} />
);

export const CircularVariant = CircularTemplate.bind({});
CircularVariant.args = {
  colorToken: 'lavenderWeb',
};

export const WithTypographyToken = Template.bind({});
WithTypographyToken.args = {
  colorToken: 'lavenderWeb',
  typographyToken: 'primaryHeader1Bold',
};
