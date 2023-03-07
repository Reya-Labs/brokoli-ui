import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { Typography, TypographyToken } from '../Typography';
import { TypographyTokenConfigMap } from '../Typography/typography-token-config-map';

export const AppLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'colorToken',
})<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
}>`
  margin: 0;
  padding: 0;
  color: ${({ colorToken }) => getColorFromToken(`${colorToken}`)};
  ${({ typographyToken }) => TypographyTokenConfigMap[typographyToken].css};
  text-decoration: none;

  &:hover {
    color: ${({ colorToken }) => getColorFromToken(`${colorToken}1`)};
  }
`;

export const DisabledTypography = styled(Typography)`
  display: inline-flex;
`;
