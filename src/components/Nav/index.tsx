import React from 'react';

import { NavBox } from './Nav.styled';
import { NavLink, NavLinkProps } from './NavLink/NavLink';

export type NavProps = {
  links: (NavLinkProps & {
    isHidden?: boolean;
    text: string;
  })[];
};

export const Nav: React.FunctionComponent<NavProps> = ({ links }) => (
  <NavBox>
    {links
      .filter((link) => !link.isHidden)
      .map((link, index) => (
        <NavLink key={`${link.text}_${index}`} {...link}>
          {link.text}
        </NavLink>
      ))}
  </NavBox>
);
