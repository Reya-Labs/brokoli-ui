import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { TypographyToken } from '../Typography';
import { TypographyTokenConfigMap } from '../Typography/typography-token-config-map';
import { primaryButtonCSS, secondaryButtonCSS } from './Button.css';

export type ButtonVariant = 'primary' | 'secondary';
const ButtonVariantMap: Record<ButtonVariant, SerializedStyles> = {
  primary: primaryButtonCSS,
  secondary: secondaryButtonCSS,
};
export const ButtonStyled = styled('button', {
  shouldForwardProp: (prop) => prop !== 'typographyToken' && prop !== 'variant',
})<{
  variant: ButtonVariant;
  typographyToken: TypographyToken;
}>`
  ${({ variant }) => ButtonVariantMap[variant]};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  ${({ typographyToken }) => css(TypographyTokenConfigMap[typographyToken].styleObject)};
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
