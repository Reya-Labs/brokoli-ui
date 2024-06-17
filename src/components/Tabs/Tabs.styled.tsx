import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { createTransition } from '../../utils/create-transition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const TabsAndComponentBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TabPillsBox = styled('div')`
  display: flex;
  flex-direction: row;
`;

const PADDING_TOP = 7;
export const TabsBox = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: ${PADDING_TOP}px 8px 0px 8px;
  position: relative;
  justify-content: space-between;
`;

export const BorderLine = styled('div', shouldNotForwardProps(['borderColorToken']))<{
  borderColorToken: ColorTokens;
}>`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  background: ${({ theme, borderColorToken }) =>
    getColorFromToken({ colorToken: borderColorToken, theme })};
  z-index: 0;
`;

export const TabStyled = styled(
  'div',
  shouldNotForwardProps([
    'typographyToken',
    'colorToken',
    'backgroundColorToken',
    'borderColorToken',
    'isActive',
    'activeTabColorToken',
    'hoverTabColorToken',
    'disabled',
  ]),
)<{
  activeTabColorToken: ColorTokens;
  backgroundColorToken: ColorTokens;
  borderColorToken: ColorTokens;
  colorToken: ColorTokens;
  disabled: boolean;
  hoverTabColorToken: ColorTokens;
  isActive: boolean;
  typographyToken: TypographyTokens;
}>`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  z-index: 1;
  border-radius: 8px 8px 0px 0px;

  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  color: ${({ isActive, theme, colorToken, activeTabColorToken }) =>
    getColorFromToken({ colorToken: isActive ? activeTabColorToken : colorToken, theme })};
  background-color: ${({ theme, backgroundColorToken }) =>
    getColorFromToken({ colorToken: backgroundColorToken, theme })};

  border-top: 1px solid
    ${({ theme, borderColorToken, backgroundColorToken, isActive }) =>
      getColorFromToken({ colorToken: isActive ? borderColorToken : backgroundColorToken, theme })};
  border-right: 1px solid
    ${({ theme, borderColorToken, backgroundColorToken, isActive }) =>
      getColorFromToken({ colorToken: isActive ? borderColorToken : backgroundColorToken, theme })};
  border-left: 1px solid
    ${({ theme, borderColorToken, backgroundColorToken, isActive }) =>
      getColorFromToken({ colorToken: isActive ? borderColorToken : backgroundColorToken, theme })};
  border-bottom: 1px solid
    ${({ theme, borderColorToken, backgroundColorToken, isActive }) =>
      getColorFromToken({ colorToken: isActive ? backgroundColorToken : borderColorToken, theme })};

  transition: ${createTransition({ properties: ['background-color', 'color'] })};

  &:hover {
    color: ${({ theme, hoverTabColorToken, disabled }) =>
      disabled ? 'none' : getColorFromToken({ colorToken: hoverTabColorToken, theme })};
  }
`;

// Have to hardcode padding when calculating size
// https://github.com/maslianok/react-resize-detector/issues/89
export const ComponentBox = styled('div', shouldNotForwardProps(['tabBoxHeight', 'hidden']))<{
  hidden: boolean;
  tabBoxHeight: number;
}>`
  height: ${({ tabBoxHeight }) => `calc(100% - ${tabBoxHeight + PADDING_TOP}px)`};
  display: ${({ hidden }) => (hidden ? 'none' : undefined)};
`;
