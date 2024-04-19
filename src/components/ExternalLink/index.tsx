import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { ExternalLinkStyled } from './ExternalLink.styled';
import { ReactComponent as LinkArrow } from './link-arrow.svg';

type ExternalLinkProps = {
  activeColorToken?: ColorTokens;
  children: string;
  className?: string;
  colorToken: ColorTokens;
  disabled?: boolean;
  disabledColorToken?: ColorTokens;
  hideArrowIcon?: boolean;
  hoverColorToken?: ColorTokens;
  href: string;
  id?: string;
  onClick?: () => void;
  typographyToken: TypographyTokens;
};

export const ExternalLink: React.FunctionComponent<ExternalLinkProps> = ({
  activeColorToken,
  onClick,
  hoverColorToken,
  hideArrowIcon,
  className,
  id,
  disabled,
  href,
  children,
  colorToken,
  typographyToken,
  disabledColorToken,
}) => {
  if (disabled) {
    return (
      <Typography
        className={className}
        colorToken={disabledColorToken || colorToken}
        data-testid={`ExternalLink-Disabled-${disabledColorToken || colorToken}`}
        id={id}
        typographyToken={typographyToken}
      >
        {children}
      </Typography>
    );
  }
  return (
    <ExternalLinkStyled
      activeColorToken={activeColorToken || colorToken}
      className={className}
      colorToken={colorToken}
      data-testid={`ExternalLink-ExternalLinkStyled-${colorToken}`}
      hoverColorToken={hoverColorToken || colorToken}
      href={href}
      id={id}
      target="_blank"
      typographyToken={typographyToken}
      onClick={disabled ? undefined : onClick}
    >
      {children}
      {hideArrowIcon ? null : <LinkArrow data-testid="ExternalLink-LinkArrow" />}
    </ExternalLinkStyled>
  );
};
