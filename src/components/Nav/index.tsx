import React from 'react';

import { NavBox } from './Nav.styled';
import { NavLink, NavLinkProps } from './NavLink/NavLink';

export type NavProps = {
  links: (NavLinkProps & {
    isHidden?: boolean;
    text: string;
  })[];
  Component?: NavLinkProps['Component'];
};

export const Nav: React.FunctionComponent<NavProps> = ({ links, Component }) => (
  <NavBox>
    {links
      .filter((link) => !link.isHidden)
      .map((link, index) => (
        <NavLink key={`${link.text}_${index}`} Component={Component} {...link}>
          {link.text}
        </NavLink>
      ))}
  </NavBox>
);
