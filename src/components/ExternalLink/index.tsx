import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { Typography, TypographyToken } from '../Typography';
import { ExternalLinkStyled } from './ExternalLink.styled';
import { ReactComponent as LinkArrow } from './link-arrow.svg';

export const ExternalLink: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  typographyToken: TypographyToken;
  children: string;
  href: string;
  disabled?: boolean;
}> = ({ disabled, href, children, colorToken, typographyToken }) => {
  if (disabled) {
    return (
      <Typography colorToken={colorToken} typographyToken={typographyToken}>
        {children}
      </Typography>
    );
  }
  return (
    <ExternalLinkStyled
      colorToken={colorToken}
      data-testid="ExternalLink-ExternalLinkStyled"
      href={href}
      target="_blank"
      typographyToken={typographyToken}
    >
      {children}
      <LinkArrow viewBox="0 0 7 7" />
    </ExternalLinkStyled>
  );
};
