import { Global } from '@emotion/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Popover } from 'react-tiny-popover';

import { AttentionIndicator } from '../../AttentionIndicator/AttentionIndicator';
import { ToggleCaret } from '../../ToggleCaret/ToggleCaret';
import { isActiveLink } from './helpers';
import {
  globalReactTinyPopoverContainerCSS,
  NAV_LINK_POPOVER_CONTAINER_CLASS_NAME,
  NavLinkButton,
} from './NavLink.styled';
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
  const subLinksNotHidden = (subLinks || []).filter((sL) => !sL.isHidden);
  const hasSubLinks = subLinksNotHidden.length !== 0;
  const [isSubmenuOpened, setIsSubmenuOpened] = React.useState(false);
  const handleSubmenuOpen = () => setIsSubmenuOpened(true);
  const handleSubmenuClose = () => setIsSubmenuOpened(false);

  const isActive = isActiveLink(
    link,
    subLinksNotHidden?.map((l) => l.link),
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
        {isNew ? <AttentionIndicator /> : null}
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
          containerClassName={NAV_LINK_POPOVER_CONTAINER_CLASS_NAME}
          content={<SubLinks subLinks={subLinksNotHidden || []} onClick={handleSubmenuClose} />}
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
