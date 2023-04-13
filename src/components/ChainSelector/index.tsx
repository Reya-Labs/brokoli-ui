import React, { useMemo, useState } from 'react';

import { Ellipsis } from '../Ellipsis';
import { Popover } from '../Popover';
import { ToggleCaret } from '../ToggleCaret';
import { ChainOptions } from './ChainOptions/ChainOptions';
import { ChainSelectorButton, IconBox, SelectorBox, WarningIcon } from './ChainSelector.styled';

type ChainOption = {
  id: number;
  name: string;
  Icon: React.FunctionComponent;
};

type ChainSelectorProps = {
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
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const handleSubmenuOpen = () => setIsSubmenuOpened(true);
  const handleSubmenuClose = () => setIsSubmenuOpened(false);
  const handleChainOptionSelection = (chainId: ChainOption['id']) => {
    onChainChange && onChainChange(chainId);
    handleSubmenuClose();
  };
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
          onClick={(chainId) => handleChainOptionSelection(chainId)}
        />
      }
      data-testid="ChainSelectorPopover"
      isOpen={isSubmenuOpened}
      onClickOutside={handleSubmenuClose}
    >
      <SelectorBox data-testid="ChainSelector-SelectorBox">
        <IconBox>{selectedChain ? <selectedChain.Icon /> : <WarningIcon />}</IconBox>
        <ChainSelectorButton
          data-testid={isSubmenuOpened ? 'OpenChainSelectorButton' : 'ChainSelectorButton'}
          isPopoverOpen={isSubmenuOpened}
          onClick={handleSubmenuOpen}
        >
          <React.Fragment>
            {approving ? (
              <React.Fragment>
                Approve in wallet <Ellipsis />
              </React.Fragment>
            ) : !selectedChain ? (
              'Unsupported'
            ) : (
              selectedChain.name
            )}
            <ToggleCaret isOpen={isSubmenuOpened} />
          </React.Fragment>
        </ChainSelectorButton>
      </SelectorBox>
    </Popover>
  );
};
