import styled from '@emotion/styled';

import { Typography } from '../Typography';

export const PreStyled = styled('pre')`
  background: ${({ theme }) => theme.colors.black700};
  padding: 8px;
  border-radius: 8px;
`;

export const H1Styled = styled(Typography)`
  margin-bottom: 24px;
`;

export const H2Styled = styled(Typography)`
  margin-bottom: 16px;
`;

export const H3Styled = styled(Typography)`
  margin-bottom: 12px;
`;

export const ParagraphStyled = styled(Typography)`
  margin-bottom: 8px;
`;

export const LiStyled = styled(Typography)`
  margin-bottom: 4px;
`;

export const CodeStyled = styled(Typography)`
  margin-bottom: 12px;
`;
