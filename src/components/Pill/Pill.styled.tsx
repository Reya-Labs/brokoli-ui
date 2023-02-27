import styled from '@emotion/styled';

import { Typography } from '../Typography';

export const PillTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>`
  display: inline-block;
  padding: 0px 4px;

  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
`;
