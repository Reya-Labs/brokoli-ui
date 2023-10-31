import React, { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { BaseColorTokens } from '../../../foundation/Colors';
import { AttentionIndicator } from '../../AttentionIndicator';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { isActiveLink } from './helpers';
import { NavLinkButton, NavLinkButtonBox } from './NavLink.styled';
import { SubLinks } from './SubLinks/SubLinks';

export type NavLinkProps = {
  link?: string;
  isNew?: boolean;
  colorToken?: BaseColorTokens | 'rainbow';
  subLinks?: {
    text: string;
    link: string;
    isNew?: boolean;
    isHidden?: boolean;
  }[];
};

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  subLinks = [],
  children,
  link,
  isNew,
  colorToken = 'white100',
}) => {
  const { pathname } = useLocation();
  const subLinksNotHidden = useMemo(
    () => (subLinks || []).filter((sL) => !sL.isHidden),
    [subLinks],
  );
  const hasSubLinks = subLinksNotHidden.length !== 0;
  const [isSubmenuOpened, setIsSubmenuOpened] = React.useState(false);
  const handleSubmenuOpen = useCallback(() => setIsSubmenuOpened(true), []);
  const handleSubmenuClose = useCallback(() => setIsSubmenuOpened(false), []);

  const isActive = useMemo(
    () => isActiveLink(link, subLinksNotHidden?.map((l) => l.link), pathname),
    [link, subLinksNotHidden, pathname],
  );

  const linkButton = (
    <NavLinkButtonBox
      colorToken={colorToken}
      data-testid={
        isSubmenuOpened ? 'OpenNavLinkButton' : isActive ? 'ActiveNavLinkButton' : 'NavLinkButton'
      }
      isActive={isActive}
      isPopoverOpen={isSubmenuOpened}
    >
      {isNew ? <AttentionIndicator colorToken="wildStrawberry" /> : null}
      <NavLinkButton
        colorToken={colorToken}
        isActive={isActive}
        isPopoverOpen={isSubmenuOpened}
        role="link"
        to={link || ''}
      >
        {children}
      </NavLinkButton>
      {!hasSubLinks ? null : <ToggleCaret isOpen={isSubmenuOpened} />}
    </NavLinkButtonBox>
  );

  return (
    <div
      data-testid={hasSubLinks ? 'NavLinkWithSubLinks' : 'NavLinkWithoutSubLinks'}
      onClick={hasSubLinks ? handleSubmenuOpen : undefined}
    >
      {hasSubLinks ? (
        <Popover
          content={<SubLinks subLinks={subLinksNotHidden || []} onClick={handleSubmenuClose} />}
          data-testid="NavLinkPopover"
          isOpen={isSubmenuOpened}
          onClickOutside={handleSubmenuClose}
        >
          {linkButton}
        </Popover>
      ) : (
        linkButton
      )}
    </div>
  );
};
