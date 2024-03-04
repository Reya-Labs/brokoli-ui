import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ExternalLinkStyled = styled(
  'a',
  shouldNotForwardProps(['colorToken', 'hoverColorToken', 'activeColorToken', 'typographyToken']),
)<{
  colorToken: ColorTokens;
  activeColorToken: ColorTokens;
  hoverColorToken: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  margin: 0;
  padding: 0;
  color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  text-decoration: none;

  & svg {
    width: 1em;
    height: 1em;
  }
  & path,
  & path {
    stroke: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }

  &:visited:hover,
  &:hover:enabled {
    text-decoration: underline;
    color: ${({ theme, hoverColorToken }) =>
      getColorFromToken({ colorToken: hoverColorToken, theme })};
  }
  &:visited:hover path,
  &:hover path {
    stroke: ${({ theme, hoverColorToken }) =>
      getColorFromToken({ colorToken: hoverColorToken, theme })};
  }

  &:active {
    color: ${({ theme, activeColorToken }) =>
      getColorFromToken({ colorToken: activeColorToken, theme })};
  }
  &:active path {
    stroke: ${({ theme, activeColorToken }) =>
      getColorFromToken({ colorToken: activeColorToken, theme })};
  }

  &:visited {
    color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }
  &:visited path {
    stroke: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }
`;
