import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ExternalLinkStyled = styled(
  'a',
  shouldNotForwardProps(['colorToken', 'typographyToken']),
)<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken: `${colorToken}400`, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  text-decoration: none;

  & svg {
    width: 1em;
    height: 1em;
  }

  &:visited:hover,
  &:hover {
    text-decoration: underline;
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}200`, theme })};
  }
  &:visited:hover path,
  &:hover path {
    stroke: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}200`, theme })};
  }

  &:active {
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}300`, theme })};
  }
  &:active path {
    stroke: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}300`, theme })};
  }

  &:visited {
    color: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}400`, theme })};
  }
  &:visited path {
    stroke: ${({ theme, colorToken }) =>
      getColorFromToken({ colorToken: `${colorToken}400`, theme })};
  }
`;
