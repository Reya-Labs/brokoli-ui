import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useLocation } from 'react-router-dom';

import { isActiveLink } from '../helpers';
import { SubLink } from '../SubLink/SubLink';
import { SubLinksButtonGroup } from './SubLinks.styled';

export type SubLinksProps = {
  subLinks: {
    text: string;
    link: string;
    isNew?: boolean;
  }[];
  onClick: () => void;
};
export const SubLinks: React.FunctionComponent<SubLinksProps> = ({ subLinks, onClick }) => {
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
