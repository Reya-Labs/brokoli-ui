import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { getTypographyFromToken, TypographyToken } from '../../foundation/Typography';
import { Typography } from '../Typography';

export const AppLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'colorToken',
})<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}`, theme })};
  ${({ theme, typographyToken }) => css(getTypographyFromToken({ theme, token: typographyToken }))};
  text-decoration: none;

  &:hover {
    color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}1`, theme })};
  }
`;

export const DisabledTypography = styled(Typography)`
  display: inline-flex;
`;
