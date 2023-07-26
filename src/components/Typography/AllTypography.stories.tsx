import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Typography as TypographyComponent } from './index';
import { TypographyTokenConfigMap } from './typography-token-config-map';
import { TypographyToken } from './typography-tokens';

const AllTypography: React.FunctionComponent<{
  colorToken: ColorTokens;
}> = ({ colorToken }) => (
  <div
    style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: '1fr',
      zIndex: 1,
    }}
  >
    {Object.keys(TypographyTokenConfigMap).map((key) => (
      <TypographyComponent
        key={key}
        colorToken={colorToken}
        typographyToken={key as TypographyToken}
      >
        {key
          .split(' ')
          .map((s) => `${s[0].toUpperCase()}${s.substring(1)}`)
          .join(' ')}
      </TypographyComponent>
    ))}
  </div>
);

export default {
  component: AllTypography,
  title: 'Foundation/Typography',
} as ComponentMeta<typeof AllTypography>;
const AllTypographyTemplate: ComponentStory<typeof AllTypography> = (args) => (
  <AllTypography {...args} />
);

export const Typography = AllTypographyTemplate.bind({});
Typography.args = {
  colorToken: 'lavenderWeb',
};
