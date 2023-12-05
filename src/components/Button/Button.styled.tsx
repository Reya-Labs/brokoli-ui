import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { primaryButtonCSS, secondaryButtonCSS, tertiaryButtonCSS } from './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
const ButtonVariantMap: Record<ButtonVariant, (theme: Theme) => SerializedStyles> = {
  primary: primaryButtonCSS,
  secondary: secondaryButtonCSS,
  tertiary: tertiaryButtonCSS,
};
export const ButtonStyled = styled(
  'button',
  shouldNotForwardProps(['typographyToken', 'variant']),
)<{
  variant: ButtonVariant;
  typographyToken: TypographyToken;
}>`
  ${({ theme, variant }) => ButtonVariantMap[variant](theme)};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  gap: 8px;
`;
