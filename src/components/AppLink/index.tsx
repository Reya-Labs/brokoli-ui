import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { AppLinkStyled, DisabledTypography } from './AppLink.styled';

export const AppLink: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
  children: string;
  to: string;
  disabled?: boolean;
}> = ({ to, disabled, children, colorToken, typographyToken }) => {
  if (!to || disabled) {
    return (
      <DisabledTypography colorToken={`${colorToken}2`} typographyToken={typographyToken}>
        {children}
      </DisabledTypography>
    );
  }
  return (
    <AppLinkStyled
      colorToken={colorToken}
      data-testid="ExternalLink-ExternalLinkStyled"
      target="_blank"
      to={to}
      typographyToken={typographyToken}
    >
      {children}
    </AppLinkStyled>
  );
};
