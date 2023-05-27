import React from 'react';

import { AttentionIndicator } from '../../../AttentionIndicator';
import { ActiveSubLinkButton, SubLinkButton } from './SubLink.styled';

export type SubLinkProps = {
  link: string;
  isNew: boolean;
  onClick: () => void;
  text: string;
  isActive: boolean;
};

export const SubLink: React.FunctionComponent<SubLinkProps> = ({
  link,
  text,
  isNew,
  onClick,
  isActive,
}: SubLinkProps) => {
  const SubLinkUI = isActive ? ActiveSubLinkButton : SubLinkButton;
  return (
    <SubLinkUI
      data-testid={isActive ? 'ActiveSubLinkButton' : 'SubLinkButton'}
      role="link"
      to={link}
      onClick={onClick}
    >
      {isNew ? <AttentionIndicator colorToken="wildStrawberry" /> : null}
      {text}
    </SubLinkUI>
  );
};
