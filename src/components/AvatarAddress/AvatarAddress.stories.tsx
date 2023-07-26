import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AvatarAddress } from './index';

export default {
  args: {},
  component: AvatarAddress,
  title: 'Components/AvatarAddress',
} as ComponentMeta<typeof AvatarAddress>;

const Template: ComponentStory<typeof AvatarAddress> = (args) => <AvatarAddress {...args} />;

export const Default = Template.bind({});
Default.args = {
  address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
  avatarSize: 'medium',
  typographyToken: 'primaryBodyMediumRegular',
};

export const SmallVariant = Template.bind({});
SmallVariant.args = {
  address: '0xbrokoli1C9000D453241221E111148F1C378ooli',
  avatarSize: 'small',
  typographyToken: 'primaryBodySmallRegular',
};
