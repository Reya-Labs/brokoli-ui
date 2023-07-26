import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Typography as TypographyComponent } from './index';
import { TypographyTokenConfigMap } from './typography-token-config-map';
import { TypographyToken } from './typography-tokens';

const Grid = styled('div')`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  z-index: 1;
`;
const AllTypography: React.FunctionComponent<{
  colorToken: ColorTokens;
}> = ({ colorToken }) => (
  <Grid>
    {Object.keys(TypographyTokenConfigMap).map((key) => (
      <TypographyComponent
        key={key}
        colorToken={colorToken}
        typographyToken={key as TypographyToken}
      >
        {key}
      </TypographyComponent>
    ))}
  </Grid>
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
