import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../foundation/Typography';

export const ExternalLinkStyled = styled('a', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'colorToken',
})<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}3`, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  text-decoration: none;

  & svg {
    width: 1em;
    height: 1em;
  }

  &:visited:hover,
  &:hover {
    color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}1`, theme })};
  }
  &:visited:hover path,
  &:hover path {
    stroke: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}1`, theme })};
  }

  &:active {
    color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}2`, theme })};
  }
  &:active path {
    stroke: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}2`, theme })};
  }

  &:visited {
    color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}3`, theme })};
  }
  &:visited path {
    stroke: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}3`, theme })};
  }
`;
