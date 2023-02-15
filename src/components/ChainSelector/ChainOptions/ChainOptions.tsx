import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { ChainOption } from '../ChainOption/ChainOption';
import { ChainOptionsButtonGroup } from './ChainOptions.styled';

export type ChainOptionsProps = {
  chainOptions: {
    id: string;
    name: string;
    Icon: React.FunctionComponent;
    isActive: boolean;
  }[];
  onClick: () => void;
};
export const ChainOptions: React.FunctionComponent<ChainOptionsProps> = ({
  chainOptions,
  onClick,
}) => {
  const [height, setHeight] = useState<'auto' | number>(0);

  useLayoutEffect(() => {
    setHeight('auto');
  }, []);

  return (
    <AnimateHeight duration={300} easing={'ease-in'} height={height} id="ChainOptionsButtonGroup">
      <ChainOptionsButtonGroup data-testid="ChainOptions-ChainOptionsButtonGroup">
        {chainOptions.map((chainOption) => (
          <ChainOption
            key={chainOption.name}
            Icon={chainOption.Icon}
            isActive={chainOption.isActive}
            name={chainOption.name}
            onClick={onClick}
          />
        ))}
      </ChainOptionsButtonGroup>
    </AnimateHeight>
  );
};
