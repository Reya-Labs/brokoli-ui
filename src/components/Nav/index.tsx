import React from 'react';

import { TypographyToken } from '../../foundation/Typography';
import { NavBox } from './Nav.styled';
import { NavLink, NavLinkProps } from './NavLink/NavLink';

export type NavProps = {
  links: (NavLinkProps & {
    isHidden?: boolean;
    text: string;
  })[];
  Component?: NavLinkProps['Component'];
  className?: string;
  typographyToken?: TypographyToken;
};

export const Nav: React.FunctionComponent<NavProps> = ({
  typographyToken = 'bodyMediumRegular',
  className,
  links,
  Component,
}) => (
  <NavBox className={className} data-testid="Nav-NavBox">
    {links
      .filter((link) => !link.isHidden)
      .map((link, index) => (
        <NavLink
          key={`${link.text}_${index}`}
          Component={Component}
          typographyToken={typographyToken}
          {...link}
        >
          {link.text}
        </NavLink>
      ))}
  </NavBox>
);
