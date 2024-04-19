import React, { HTMLAttributeAnchorTarget, ReactNode } from 'react';

import { AttentionIndicator } from '../../../AttentionIndicator';
import { ActiveSubLinkButton, SubLinkButton } from './SubLink.styled';

export type SubLinkProps = {
  Component?: React.FunctionComponent<{
    children: string | ReactNode;
    className?: string;
    'data-testid'?: string;
    disabled?: boolean;
    href?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: any;
  }>;
  isActive: boolean;
  isNew: boolean;
  link: string;
  onClick: () => void;
  target?: HTMLAttributeAnchorTarget | undefined;
  text: string;
};

export const SubLink: React.FunctionComponent<SubLinkProps> = ({
  link,
  text,
  isNew,
  onClick,
  isActive,
  Component,
  target,
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
      target={target}
      to={link}
      onClick={onClick}
    >
      {isNew ? <AttentionIndicator colorToken="error100" /> : null}
      {text}
    </SubLinkUI>
  );
};
