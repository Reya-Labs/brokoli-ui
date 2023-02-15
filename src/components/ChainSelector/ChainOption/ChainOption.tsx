import React from 'react';

import { ActiveChainOptionButton, ChainOptionButton } from './ChainOption.styled';

export type ChainOptionProps = {
  name: string;
  Icon: React.FunctionComponent;
  isActive: boolean;
  onClick: () => void;
};

export const ChainOption: React.FunctionComponent<ChainOptionProps> = ({
  name,
  Icon,
  isActive,
  onClick,
}: ChainOptionProps) => {
  const ChainOptionUI = isActive ? ActiveChainOptionButton : ChainOptionButton;
  return (
    <ChainOptionUI
      data-testid={isActive ? 'ActiveChainOptionButton' : 'ChainOptionButton'}
      onClick={onClick}
    >
      <Icon /> {name}
    </ChainOptionUI>
  );
};
