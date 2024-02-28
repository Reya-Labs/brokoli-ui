import React from 'react';

import { ChainIcon } from '../../Icons';
import { SupportedChainIcons } from '../../Icons/ChainIcon/Icon/constants';
import { ActiveChainOptionButton, ChainOptionButton, IconBox } from './ChainOption.styled';

export type ChainOptionProps = {
  id: number;
  name: string;
  isActive: boolean;
  onClick: () => void;
};

export const ChainOption: React.FunctionComponent<ChainOptionProps> = ({
  id,
  name,
  isActive,
  onClick,
}: ChainOptionProps) => {
  const ChainOptionUI = isActive ? ActiveChainOptionButton : ChainOptionButton;
  return (
    <ChainOptionUI
      data-testid={isActive ? 'ActiveChainOptionButton' : 'ChainOptionButton'}
      onClick={onClick}
    >
      <IconBox isActive={isActive}>
        <ChainIcon
          chainId={id as SupportedChainIcons}
          data-testid={`ChainOptionUI-ChainIcon-${id}`}
        />
      </IconBox>
      {name}
    </ChainOptionUI>
  );
};
