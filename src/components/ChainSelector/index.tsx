import { Global } from '@emotion/react';
import React, { useMemo, useState } from 'react';
import { Popover } from 'react-tiny-popover';

import { Ellipsis } from '../Ellipsis';
import { ToggleCaret } from '../ToggleCaret/ToggleCaret';
import { ChainOptions } from './ChainOptions/ChainOptions';
import {
  CHAIN_SELECTOR_POPOVER_CONTAINER_CLASS_NAME,
  ChainSelectorButton,
  globalReactTinyPopoverContainerCSS,
  SelectorBox,
  WarningIcon,
} from './ChainSelector.styled';

type ChainOption = {
  id: string;
  name: string;
  Icon: React.FunctionComponent;
};

type ChainSelectorProps = {
  onChainChange: (option: ChainOption) => void;
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
  const selectedChain = useMemo(() => {
    return chainOptions.find((o) => o.id === selectedChainId);
  }, [chainOptions, selectedChainId]);

  if (chainOptions.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <Global styles={globalReactTinyPopoverContainerCSS} />
      <Popover
        align="start"
        containerClassName={CHAIN_SELECTOR_POPOVER_CONTAINER_CLASS_NAME}
        content={
          <ChainOptions
            chainOptions={chainOptions.map((c) => ({
              ...c,
              isActive: c.id === selectedChain?.id,
            }))}
            onClick={handleSubmenuClose}
          />
        }
        data-testid="ChainSelectorPopover"
        isOpen={isSubmenuOpened}
        positions={['bottom']}
        onClickOutside={handleSubmenuClose}
      >
        <SelectorBox data-testid="ChainSelector-SelectorBox">
          {selectedChain ? <selectedChain.Icon /> : <WarningIcon />}
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
    </React.Fragment>
  );
};
