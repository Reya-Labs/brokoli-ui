import { Meta, StoryObj } from '@storybook/react';

import { AvatarAddress } from '.';

export default {
  args: {},
  component: AvatarAddress,
  title: 'Components/AvatarAddress',
} as Meta<typeof AvatarAddress>;

export const Default: StoryObj<typeof AvatarAddress> = {
  args: {
    address: '0xb01F14d1C9000D453241221EB54648F1C378c970',
    avatarSize: 'medium',
    typographyToken: 'bodyMediumMedium',
  },
};

export const SmallVariant: StoryObj<typeof AvatarAddress> = {
  args: {
    address: '0xbrokoli1C9000D453241221E111148F1C378ooli',
    avatarSize: 'small',
    typographyToken: 'bodySmallMedium',
  },
};
