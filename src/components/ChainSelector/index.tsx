import React, { useCallback, useMemo, useState } from 'react';

import { Popover } from '../Popover';
import { ToggleCaret } from '../ToggleCaret';
import { ChainOptions } from './ChainOptions/ChainOptions';
import { Box, ChainSelectorButton, IconBox, SelectorBox } from './ChainSelector.styled';

export type ChainOption = {
  id: number;
  name: string;
  Icon: React.FunctionComponent;
};

export type ChainSelectorProps = {
  onChainChange: (optionId: ChainOption['id']) => void;
  selectedChainId?: ChainOption['id'];
  chainOptions: ChainOption[];
  approving?: boolean;
};

export const ChainSelector: React.FunctionComponent<ChainSelectorProps> = ({
  chainOptions,
  selectedChainId,
  onChainChange,
  approving,
}) => {
  const [width, setWidth] = useState(0);
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const handleSubmenuOpen = () => setIsSubmenuOpened(true);
  const handleSubmenuClose = () => setIsSubmenuOpened(false);
  const handleChainOptionSelection = (chainId: ChainOption['id']) => {
    onChainChange && onChainChange(chainId);
    handleSubmenuClose();
  };

  const parentRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null && isSubmenuOpened) {
        setWidth(node.getBoundingClientRect().width);
      }
    },
    [isSubmenuOpened],
  );

  const selectedChain = useMemo(() => {
    return chainOptions.find((o) => o.id === selectedChainId);
  }, [chainOptions, selectedChainId]);

  if (chainOptions.length === 0) {
    return null;
  }

  return (
    <Popover
      content={
        <ChainOptions
          chainOptions={chainOptions.map((c) => ({
            ...c,
            isActive: c.id === selectedChain?.id,
          }))}
          parentWidth={width}
          onClick={(chainId) => handleChainOptionSelection(chainId)}
        />
      }
      data-testid="ChainSelector-ChainSelectorPopover"
      isOpen={isSubmenuOpened}
      onClickOutside={handleSubmenuClose}
    >
      <Box>
        <SelectorBox ref={parentRef} data-testid="ChainSelector-SelectorBox">
          {selectedChain ? (
            <IconBox data-testid="ChainSelector-IconBox">
              <selectedChain.Icon data-testid={`ChainSelector-${selectedChain.name}`} />
            </IconBox>
          ) : null}
          <ChainSelectorButton
            data-testid={isSubmenuOpened ? 'OpenChainSelectorButton' : 'ChainSelectorButton'}
            isPopoverOpen={isSubmenuOpened}
            onClick={handleSubmenuOpen}
          >
            <React.Fragment>
              {approving
                ? 'Approve in wallet...'
                : !selectedChain
                ? 'Pick a network'
                : selectedChain.name}
              <ToggleCaret isOpen={isSubmenuOpened} />
            </React.Fragment>
          </ChainSelectorButton>
        </SelectorBox>
      </Box>
    </Popover>
  );
};
