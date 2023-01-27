import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { colors } from '../../foundation/Colors/colors';
import { TypographyToken, TypographyUIMap } from './index';

const AllTypography: React.FunctionComponent<{
  color: string;
}> = ({ color }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 16,
      zIndex: 1,
    }}
  >
    {Object.keys(TypographyUIMap).map((key) => {
      const TypographyUI = TypographyUIMap[key as TypographyToken];
      return (
        <TypographyUI key={key} color={color}>
          {key
            .split(' ')
            .map((s) => `${s[0].toUpperCase()}${s.substring(1)}`)
            .join(' ')}
        </TypographyUI>
      );
    })}
  </div>
);

export default {
  title: 'Foundation/AllTypography',
  component: AllTypography,
} as ComponentMeta<typeof AllTypography>;
const AllTypographyTemplate: ComponentStory<typeof AllTypography> = (args) => (
  <AllTypography {...args} />
);

export const Default = AllTypographyTemplate.bind({});
Default.args = {
  color: colors.lavenderWeb,
};
