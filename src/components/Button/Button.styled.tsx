import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { addAlpha, ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { createTransition } from '../../utils/create-transition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ButtonStyled = styled(
  'button',
  shouldNotForwardProps([
    'typographyToken',
    'borderColorToken',
    'backgroundColorToken',
    'typographyColorToken',
    'hoverBorderColorToken',
    'hoverTypographyColorToken',
    'hoverBackgroundColorToken',
    'rounded',
    'hoverIconColorToken',
    'iconColorToken',
  ]),
)<{
  backgroundColorToken?: ColorTokens;
  borderColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  hoverBorderColorToken?: ColorTokens;
  hoverIconColorToken?: ColorTokens;
  hoverTypographyColorToken?: ColorTokens;
  iconColorToken?: ColorTokens;
  rounded: boolean;
  typographyColorToken?: ColorTokens;
  typographyToken: TypographyTokens;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  border-radius: ${({ rounded }) => (rounded ? '8px' : '0px')};
  cursor: pointer;
  width: 100%;

  background: ${({ theme, backgroundColorToken }) =>
    backgroundColorToken
      ? getColorFromToken({ colorToken: backgroundColorToken, theme })
      : 'transparent'};
  border: ${({ theme, borderColorToken }) =>
    borderColorToken
      ? `1px solid ${getColorFromToken({ colorToken: borderColorToken, theme })}`
      : 'none'};
  color: ${({ theme, typographyColorToken }) =>
    typographyColorToken
      ? getColorFromToken({ colorToken: typographyColorToken, theme })
      : undefined};
  transition: ${createTransition({ properties: ['border', 'background-color', 'color'] })};
  position: relative;

  &:hover:enabled {
    border: ${({ theme, borderColorToken, hoverBorderColorToken }) =>
      hoverBorderColorToken || borderColorToken
        ? `1px solid ${getColorFromToken({
            colorToken: hoverBorderColorToken || borderColorToken,
            theme,
          })}`
        : 'none'};
    color: ${({ theme, hoverTypographyColorToken }) =>
      hoverTypographyColorToken
        ? getColorFromToken({ colorToken: hoverTypographyColorToken, theme })
        : undefined};
    background: ${({ theme, hoverBackgroundColorToken }) =>
      hoverBackgroundColorToken
        ? getColorFromToken({ colorToken: hoverBackgroundColorToken, theme })
        : 'transparent'};
  }

  &:focus {
    outline: none;
    box-shadow:
      inset 0 0 2px 1px
        ${({ theme, typographyColorToken, hoverTypographyColorToken }) =>
          addAlpha(
            getColorFromToken({
              colorToken: hoverTypographyColorToken || typographyColorToken,
              theme,
            }),
            0.4,
          )},
      0 1px 0 3px
        ${({ theme, hoverBackgroundColorToken, backgroundColorToken }) =>
          addAlpha(
            getColorFromToken({
              colorToken: hoverBackgroundColorToken || backgroundColorToken,
              theme,
            }),
            0.15,
          )};
  }

  &:disabled {
    cursor: not-allowed;
    filter: blur(1px);
  }

  & path {
    display: block;
    stroke: ${({ theme, iconColorToken }) =>
      iconColorToken ? getColorFromToken({ colorToken: iconColorToken, theme }) : 'inherit'};
    transition: ${createTransition({ properties: 'stroke' })};
  }

  &:hover:enabled path {
    stroke: ${({ theme, hoverIconColorToken }) =>
      hoverIconColorToken
        ? getColorFromToken({ colorToken: hoverIconColorToken, theme })
        : 'inherit'};
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
`;

export const IconBox = styled('div', shouldNotForwardProps(['colorToken', 'hoverColorToken']))<{
  colorToken?: ColorTokens;
  hoverColorToken?: ColorTokens;
}>`
  display: flex;
  height: 100%;
  align-items: center;
  color: ${({ theme, colorToken }) =>
    colorToken ? getColorFromToken({ colorToken, theme }) : 'inherit'};

  &:hover:enabled {
    color: ${({ theme, hoverColorToken }) =>
      hoverColorToken ? getColorFromToken({ colorToken: hoverColorToken, theme }) : 'inherit'};
  }
`;
