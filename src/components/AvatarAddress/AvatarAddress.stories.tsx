import { Meta, StoryObj } from '@storybook/react';

import { AvatarAddress } from '.';

export default {
  args: {},
  component: AvatarAddress,
  title: 'Components/AvatarAddress',
} as Meta<typeof AvatarAddress>;

export const Default: StoryObj<typeof AvatarAddress> = {
  args: {
    address: '0x2fA11eF008c4b585CCf0A76861794aC7AE5A3a67',
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
