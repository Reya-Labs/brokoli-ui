import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
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
  ]),
)<{
  typographyToken: TypographyTokens;
  borderColorToken?: ColorTokens;
  backgroundColorToken?: ColorTokens;
  typographyColorToken?: ColorTokens;
  hoverBorderColorToken?: ColorTokens;
  hoverTypographyColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  rounded: boolean;
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
  transition: ${createTransition({ properties: [' border', 'background', 'color'] })};
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

  &:disabled {
    cursor: not-allowed;
    filter: blur(1px);
  }

  & path {
    display: block;
    stroke: ${({ theme, typographyColorToken }) =>
      typographyColorToken
        ? getColorFromToken({ colorToken: typographyColorToken, theme })
        : 'inherit'};
    transition: ${createTransition({ properties: 'stroke' })};
  }

  &:hover:enabled path {
    stroke: ${({ theme, hoverTypographyColorToken }) =>
      hoverTypographyColorToken
        ? getColorFromToken({ colorToken: hoverTypographyColorToken, theme })
        : 'inherit'};
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const IconBox = styled('div', shouldNotForwardProps(['color', 'hoverColor']))<{
  color?: ColorTokens;
  hoverColor?: ColorTokens;
}>`
  display: flex;
  height: 100%;
  align-items: center;
  color: ${({ theme, color }) =>
    color ? getColorFromToken({ colorToken: color, theme }) : 'inherit'};

  &:hover:enabled {
    color: ${({ theme, hoverColor }) =>
      hoverColor ? getColorFromToken({ colorToken: hoverColor, theme }) : 'inherit'};
  }
`;
