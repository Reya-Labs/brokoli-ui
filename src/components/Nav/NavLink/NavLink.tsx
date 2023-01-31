import { Global } from '@emotion/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Popover } from 'react-tiny-popover';

import { isActiveLink } from './helpers';
import { globalReactTinyPopoverContainerCSS, NavLinkButton } from './NavLink.styled';
import { NewLinkIndicator } from './NewLinkIndicator/NewLinkIndicator';
import { SubLinks } from './SubLinks/SubLinks';
import { ToggleCaret } from './ToggleCaret/ToggleCaret';

export type NavLinkProps = {
  link?: string;
  isNew?: boolean;
  subLinks?: {
    text: string;
    link: string;
    isNew?: boolean;
  }[];
};

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  subLinks = [],
  children,
  link,
  isNew,
}) => {
  const { pathname } = useLocation();
  const hasSubLinks = subLinks && subLinks.length !== 0;
  const [isSubmenuOpened, setIsSubmenuOpened] = React.useState(false);
  const handleSubmenuOpen = () => setIsSubmenuOpened(true);
  const handleSubmenuClose = () => setIsSubmenuOpened(false);

  const isActive = isActiveLink(
    link,
    subLinks?.map((l) => l.link),
    pathname,
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
        {isNew ? <NewLinkIndicator /> : null}
        {children}
        {!hasSubLinks ? null : <ToggleCaret isOpen={isSubmenuOpened} />}
      </React.Fragment>
    </NavLinkButton>
  );

  return (
    <div data-testid={hasSubLinks} onClick={hasSubLinks ? handleSubmenuOpen : undefined}>
      <Global styles={globalReactTinyPopoverContainerCSS} />
      {hasSubLinks ? (
        <Popover
          align="start"
          content={<SubLinks subLinks={subLinks || []} onClick={handleSubmenuClose} />}
          data-testid="NavLinkPopover"
          isOpen={isSubmenuOpened}
          positions={['bottom']}
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
