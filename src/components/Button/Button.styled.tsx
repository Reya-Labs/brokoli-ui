import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getTypographyFromToken, TypographyToken } from '../../foundation/Typography';
import { primaryButtonCSS, secondaryButtonCSS } from './Button.css';

export type ButtonVariant = 'primary' | 'secondary';
const ButtonVariantMap: Record<ButtonVariant, (theme: Theme) => SerializedStyles> = {
  primary: primaryButtonCSS,
  secondary: secondaryButtonCSS,
};
export const ButtonStyled = styled('button', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'variant',
})<{
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
  ${({ theme, typographyToken }) => css(getTypographyFromToken({ theme, token: typographyToken }))};
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
