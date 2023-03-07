import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { TypographyTokenConfigMap } from '../Typography/typography-token-config-map';

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
  color: ${({ colorToken }) => getColorFromToken(`${colorToken}3`)};
  ${({ typographyToken }) => css(TypographyTokenConfigMap[typographyToken].styleObject)};
  text-decoration: none;

  & svg {
    width: 1em;
    height: 1em;
  }

  &:visited:hover,
  &:hover {
    color: ${({ colorToken }) => getColorFromToken(`${colorToken}1`)};
  }
  &:visited:hover path,
  &:hover path {
    stroke: ${({ colorToken }) => getColorFromToken(`${colorToken}1`)};
  }

  &:active {
    color: ${({ colorToken }) => getColorFromToken(`${colorToken}2`)};
  }
  &:active path {
    stroke: ${({ colorToken }) => getColorFromToken(`${colorToken}2`)};
  }

  &:visited {
    color: ${({ colorToken }) => getColorFromToken(`${colorToken}3`)};
  }
  &:visited path {
    stroke: ${({ colorToken }) => getColorFromToken(`${colorToken}3`)};
  }
`;
