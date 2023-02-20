import React from 'react';

import { NavBox } from './Nav.styled';
import { NavLink } from './NavLink/NavLink';

export type NavProps = {
  links: {
    link?: string;
    isNew?: boolean;
    subLinks?: {
      text: string;
      link: string;
      isNew?: boolean;
    }[];
    isHidden?: boolean;
    text: string;
  }[];
};

export const Nav: React.FunctionComponent<NavProps> = ({ links }) => (
  <NavBox>
    {links
      .filter((link) => !link.isHidden)
      .map((link, index) => (
        <NavLink key={`${link.text}_${index}`} isNew={link.isNew} subLinks={link.subLinks}>
          {link.text}
        </NavLink>
      ))}
  </NavBox>
);
