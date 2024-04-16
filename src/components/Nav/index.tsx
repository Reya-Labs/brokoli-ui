import React from 'react';

import { TypographyTokens } from '../../foundation/Typography';
import { NavBox } from './Nav.styled';
import { NavLink, NavLinkProps } from './NavLink';

export type NavProps = {
  links: (NavLinkProps & {
    isHidden?: boolean;
    text: string;
  })[];
  Component?: NavLinkProps['Component'];
  className?: string;
  id?: string;
  typographyToken?: TypographyTokens;
};

export const Nav: React.FunctionComponent<NavProps> = ({
  typographyToken = 'bodyMediumMedium',
  className,
  links,
  Component,
  id,
}) => (
  <NavBox className={className} data-testid="Nav-NavBox" id={id}>
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
