import React, { HTMLAttributeAnchorTarget, useCallback, useMemo } from 'react';

import { BaseColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { AttentionIndicator } from '../../AttentionIndicator';
import { Popover } from '../../Popover';
import { ToggleCaret } from '../../ToggleCaret';
import { isActiveLink } from './is-active-link';
import { NavLinkButton, NavLinkButtonBox } from './NavLink.styled';
import { SubLinks, SubLinksProps } from './SubLinks/SubLinks';
import { useLocation } from './useLocation';

export type NavLinkProps = React.PropsWithChildren<{
  Component?: SubLinksProps['Component'];
  className?: string;
  colorToken?: BaseColorTokens | 'rainbow';
  isNew?: boolean;
  link?: string;
  subLinks?: {
    isHidden?: boolean;
    isNew?: boolean;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    text: string;
  }[];
  target?: HTMLAttributeAnchorTarget | undefined;
  typographyToken?: TypographyTokens;
}>;

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  className,
  subLinks = [],
  children,
  link,
  isNew,
  colorToken = 'white',
  Component,
  typographyToken = 'bodyMediumMedium',
  target,
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

  const isActive = isActiveLink(link, subLinksNotHidden?.map((l) => l.link), pathname);

  const to = link || '';
  const NavLinkButtonComputed = Component ? NavLinkButton.withComponent(Component) : NavLinkButton;
  const linkButton = (
    <NavLinkButtonBox
      colorToken={colorToken}
      data-testid={
        isSubmenuOpened ? 'OpenNavLinkButton' : isActive ? 'ActiveNavLinkButton' : 'NavLinkButton'
      }
      isActive={isActive}
      isPopoverOpen={isSubmenuOpened}
    >
      {isNew ? <AttentionIndicator colorToken="error100" /> : null}
      <NavLinkButtonComputed
        colorToken={colorToken}
        href={to}
        isActive={isActive}
        isPopoverOpen={isSubmenuOpened}
        role="link"
        target={target}
        to={to}
        typographyToken={typographyToken}
      >
        {children}
      </NavLinkButtonComputed>
      {!hasSubLinks ? null : <ToggleCaret isOpen={isSubmenuOpened} />}
    </NavLinkButtonBox>
  );

  return (
    <div
      className={className}
      data-testid={hasSubLinks ? 'NavLinkWithSubLinks' : 'NavLinkWithoutSubLinks'}
      onClick={hasSubLinks ? handleSubmenuOpen : undefined}
    >
      {hasSubLinks ? (
        <Popover
          content={
            <SubLinks
              Component={Component}
              subLinks={subLinksNotHidden || []}
              onClick={handleSubmenuClose}
            />
          }
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
