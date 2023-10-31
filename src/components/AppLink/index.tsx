import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { AppLinkStyled, DisabledTypography } from './AppLink.styled';

export type AppLinkProps = {
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
  children: string;
  to: string;
  disabled?: boolean;
  className?: string;
  'data-testid'?: string;
};

export const AppLink: React.FunctionComponent<AppLinkProps> = ({
  className,
  'data-testid': dataTestId,
  to,
  disabled,
  children,
  colorToken,
  typographyToken,
}) => {
  if (!to || disabled) {
    return (
      <DisabledTypography
        className={className}
        colorToken={`${colorToken}300`}
        data-testid={dataTestId || 'AppLink-DisabledTypography'}
        typographyToken={typographyToken}
      >
        {children}
      </DisabledTypography>
    );
  }
  return (
    <AppLinkStyled
      className={className}
      colorToken={colorToken}
      data-testid={dataTestId || 'AppLink-AppLinkStyled'}
      to={to}
      typographyToken={typographyToken}
    >
      {children}
    </AppLinkStyled>
  );
};
