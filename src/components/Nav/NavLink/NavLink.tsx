import React, { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { AttentionIndicator } from '../../AttentionIndicator/AttentionIndicator';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { isActiveLink } from './helpers';
import { NavLinkButton } from './NavLink.styled';
import { SubLinks } from './SubLinks/SubLinks';

export type NavLinkProps = {
  link?: string;
  isNew?: boolean;
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
    () =>
      isActiveLink(
        link,
        subLinksNotHidden?.map((l) => l.link),
        pathname,
      ),
    [link, subLinksNotHidden, pathname],
  );

  const linkButton = (
    <NavLinkButton
      data-testid={
        isSubmenuOpened ? 'OpenNavLinkButton' : isActive ? 'ActiveNavLinkButton' : 'NavLinkButton'
      }
      isActive={isActive}
      isPopoverOpen={isSubmenuOpened}
      role="link"
      to={link || ''}
    >
      <React.Fragment>
        {isNew ? <AttentionIndicator /> : null}
        {children}
        {!hasSubLinks ? null : <ToggleCaret isOpen={isSubmenuOpened} />}
      </React.Fragment>
    </NavLinkButton>
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
