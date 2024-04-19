import React, { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { AppLinkStyled, DisabledTypography } from './AppLink.styled';

export type AppLinkProps = {
  Component?: React.FunctionComponent<{
    children: string | ReactNode;
    className?: string;
    'data-testid'?: string;
    disabled?: boolean;
    href?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: any;
  }>;
  children: string;
  className?: string;
  colorToken: ColorTokens;
  'data-testid'?: string;
  disabled?: boolean;
  disabledColorToken?: ColorTokens;
  hoverColorToken?: ColorTokens;
  target?: HTMLAttributeAnchorTarget | undefined;
  to: string;
  typographyToken: TypographyTokens;
};

export const AppLink: React.FunctionComponent<AppLinkProps> = ({
  className,
  'data-testid': dataTestId,
  to,
  disabled,
  children,
  colorToken,
  typographyToken,
  target,
  Component,
  disabledColorToken,
  hoverColorToken,
}) => {
  if (!to || disabled) {
    return (
      <DisabledTypography
        className={className}
        colorToken={disabledColorToken || colorToken}
        data-testid={dataTestId || 'AppLink-DisabledTypography'}
        typographyToken={typographyToken}
      >
        {children}
      </DisabledTypography>
    );
  }
  const AppLinkStyledComputed = Component ? AppLinkStyled.withComponent(Component) : AppLinkStyled;
  return (
    <AppLinkStyledComputed
      className={className}
      colorToken={colorToken}
      data-testid={dataTestId || 'AppLink-AppLinkStyled'}
      hoverColorToken={hoverColorToken || colorToken}
      href={to}
      target={target}
      to={to}
      typographyToken={typographyToken}
    >
      {children}
    </AppLinkStyledComputed>
  );
};
