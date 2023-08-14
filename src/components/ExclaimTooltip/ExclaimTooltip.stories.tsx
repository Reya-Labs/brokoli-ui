import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { ExclaimTooltip } from './index';

export default {
  args: {},
  component: ExclaimTooltip,
  title: 'Components/ExclaimTooltip',
} as ComponentMeta<typeof ExclaimTooltip>;

const Template: ComponentStory<typeof ExclaimTooltip> = (args) => <ExclaimTooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
};

export const LongTooltip = Template.bind({});
LongTooltip.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const CustomComponentTooltip = Template.bind({});
CustomComponentTooltip.args = {
  children: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Typography colorToken="lavenderWeb" typographyToken="primaryHeader1Bold">
        CustomComponentTooltip
      </Typography>
      <Typography colorToken="lavenderWeb" typographyToken="primaryBodyMediumRegular">
        Really it all fits
      </Typography>
      <Button variant="primary">A button! Click iit!</Button>
    </div>
  ),
};