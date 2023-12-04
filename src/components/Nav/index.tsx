import React from 'react';

import { NavBox } from './Nav.styled';
import { NavLink, NavLinkProps } from './NavLink/NavLink';

export type NavProps = {
  links: (NavLinkProps & {
    isHidden?: boolean;
    text: string;
  })[];
  Component?: NavLinkProps['Component'];
  className?: string;
};

export const Nav: React.FunctionComponent<NavProps> = ({ className, links, Component }) => (
  <NavBox className={className} data-testid="Nav-NavBox">
    {links
      .filter((link) => !link.isHidden)
      .map((link, index) => (
        <NavLink key={`${link.text}_${index}`} Component={Component} {...link}>
          {link.text}
        </NavLink>
      ))}
  </NavBox>
);
