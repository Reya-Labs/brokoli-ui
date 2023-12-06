import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { ExternalLinkStyled } from './ExternalLink.styled';
import { ReactComponent as LinkArrow } from './link-arrow.svg';

export const ExternalLink: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
  children: string;
  href: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  hideArrowIcon?: boolean;
}> = ({ hideArrowIcon, className, id, disabled, href, children, colorToken, typographyToken }) => {
  if (disabled) {
    return (
      <Typography
        className={className}
        colorToken={`${colorToken}100`}
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
      className={className}
      colorToken={colorToken}
      data-testid={`ExternalLink-ExternalLinkStyled-${colorToken}`}
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
