import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
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
} as Meta<typeof AllTypography>;

export const Typography: StoryObj<typeof AllTypography> = {
  args: {
    colorToken: 'lavenderWeb',
  },
};
