import React, { useLayoutEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import { ChainOption } from '../ChainOption/ChainOption';
import { ChainOptionsButtonGroup } from './ChainOptions.styled';

export type ChainOptionsProps = {
  chainOptions: {
    id: number;
    name: string;
    isActive: boolean;
  }[];
  parentWidth: number;
  onClick: (chainId: number) => void;
};
export const ChainOptions: React.FunctionComponent<ChainOptionsProps> = ({
  chainOptions,
  parentWidth,
  onClick,
}) => {
  const [height, setHeight] = useState<'auto' | number>(0);
  const [width, setWidth] = useState<'auto' | number>('auto');

  useLayoutEffect(() => {
    setHeight('auto');
    setWidth(parentWidth);
  }, [parentWidth]);

  return (
    <AnimateHeight
      duration={300}
      easing="ease-in"
      height={height}
      id="ChainOptionsButtonGroup"
      // eslint-disable-next-line react/forbid-component-props
      style={{
        width,
      }}
    >
      <ChainOptionsButtonGroup data-testid="ChainOptions-ChainOptionsButtonGroup">
        {chainOptions.map((chainOption) => (
          <ChainOption
            key={chainOption.name}
            id={chainOption.id}
            isActive={chainOption.isActive}
            name={chainOption.name}
            onClick={() => onClick && onClick(chainOption.id)}
          />
        ))}
      </ChainOptionsButtonGroup>
    </AnimateHeight>
  );
};
