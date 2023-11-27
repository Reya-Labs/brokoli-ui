import React, { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { AttentionIndicator } from '../../../AttentionIndicator';
import { ActiveSubLinkButton, SubLinkButton } from './SubLink.styled';

export type SubLinkProps = {
  link: string;
  isNew: boolean;
  onClick: () => void;
  text: string;
  isActive: boolean;
  Component?: React.FunctionComponent<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: any;
    href?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    disabled?: boolean;
    className?: string;
    'data-testid'?: string;
    children: string | ReactNode;
  }>;
};

export const SubLink: React.FunctionComponent<SubLinkProps> = ({
  link,
  text,
  isNew,
  onClick,
  isActive,
  Component,
}: SubLinkProps) => {
  const SubLinkUI = isActive
    ? Component
      ? ActiveSubLinkButton.withComponent(Component)
      : ActiveSubLinkButton
    : Component
    ? SubLinkButton.withComponent(Component)
    : SubLinkButton;

  return (
    <SubLinkUI
      data-testid={isActive ? 'ActiveSubLinkButton' : 'SubLinkButton'}
      href={link}
      role="link"
      to={link}
      onClick={onClick}
    >
      {isNew ? <AttentionIndicator colorToken="error100" /> : null}
      {text}
    </SubLinkUI>
  );
};
