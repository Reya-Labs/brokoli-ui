import React, { useCallback } from 'react';

import { ChainIcon } from '../../Icons';
import { SupportedChainIcons } from '../../Icons/ChainIcon/Icon/constants';
import { ActiveChainOptionButton, ChainOptionButton, IconBox } from './ChainOption.styled';

export type ChainOptionProps = {
  id: number;
  isActive: boolean;
  isDisabled?: boolean;
  name: string;
  onClick: () => void;
};

export const ChainOption: React.FunctionComponent<ChainOptionProps> = ({
  id,
  name,
  isActive,
  isDisabled,
  onClick,
}: ChainOptionProps) => {
  const ChainOptionUI = isActive ? ActiveChainOptionButton : ChainOptionButton;
  const handleClick = useCallback(() => {
    if (isDisabled) {
      return;
    }
    typeof onClick === 'function' && onClick();
  }, [isDisabled, onClick]);
  return (
    <ChainOptionUI
      data-testid={isActive ? 'ActiveChainOptionButton' : 'ChainOptionButton'}
      disabled={isDisabled}
      onClick={handleClick}
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
