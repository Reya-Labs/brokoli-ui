import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { ExternalLinkStyled } from './ExternalLink.styled';
import { ReactComponent as LinkArrow } from './link-arrow.svg';

type ExternalLinkProps = {
  colorToken: ColorTokens;
  activeColorToken?: ColorTokens;
  hoverColorToken?: ColorTokens;
  typographyToken: TypographyTokens;
  children: string;
  href: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  hideArrowIcon?: boolean;
};

export const ExternalLink: React.FunctionComponent<ExternalLinkProps> = ({
  activeColorToken,
  hoverColorToken,
  hideArrowIcon,
  className,
  id,
  disabled,
  href,
  children,
  colorToken,
  typographyToken,
}) => {
  if (disabled) {
    return (
      <Typography
        className={className}
        colorToken={colorToken}
        data-testid={`ExternalLink-Disabled-${colorToken}`}
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
    >
      {children}
      {hideArrowIcon ? null : <LinkArrow data-testid="ExternalLink-LinkArrow" viewBox="0 0 7 7" />}
    </ExternalLinkStyled>
  );
};
