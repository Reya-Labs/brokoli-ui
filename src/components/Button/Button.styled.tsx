import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
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
  transition:
    border,
    background,
    color 200ms ease-in;

  &:hover {
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
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
