import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { isActiveLink } from '../helpers';
import { SubLink, SubLinkProps } from '../SubLink/SubLink';
import { useLocation } from '../useLocation';
import { SubLinksButtonGroup } from './SubLinks.styled';

export type SubLinksProps = {
  subLinks: {
    text: string;
    link: string;
    isNew?: boolean;
  }[];
  Component?: SubLinkProps['Component'];
  onClick: () => void;
};
export const SubLinks: React.FunctionComponent<SubLinksProps> = ({
  Component,
  subLinks,
  onClick,
}) => {
  const { pathname } = useLocation();
  const [height, setHeight] = useState<'auto' | number>(0);

  useLayoutEffect(() => {
    setHeight('auto');
  }, []);

  return (
    <AnimateHeight duration={300} easing={'ease-in'} height={height} id="SubLinksButtonGroup">
      <SubLinksButtonGroup data-testid="SubLinks-SubLinksButtonGroup">
        {subLinks.map((subLink) => (
          <SubLink
            key={subLink.text}
            Component={Component}
            isActive={isActiveLink(subLink.link, [], pathname)}
            isNew={Boolean(subLink.isNew)}
            link={subLink.link}
            text={subLink.text}
            onClick={onClick}
          />
        ))}
      </SubLinksButtonGroup>
    </AnimateHeight>
  );
};
