import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography as TypographyComponent } from '../../components/Typography';
import { ColorTokens } from '../Colors';
import { TypographyToken } from './types';

const Grid = styled('div')`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  z-index: 1;
`;
const AllTypography: React.FunctionComponent<{
  colorToken: ColorTokens;
}> = ({ colorToken }) => {
  const { typography } = useTheme();
  return (
    <Grid>
      {Object.keys(typography).map((key) => (
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
};

export default {
  component: AllTypography,
  title: 'Foundation/Typography',
} as Meta<typeof AllTypography>;

export const TypographyStory: StoryObj<typeof AllTypography> = {
  args: {
    colorToken: 'white100',
  },
};
