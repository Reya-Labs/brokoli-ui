import React, { useCallback, useMemo, useState } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { Popover } from '../Popover';
import { ToggleCaret } from '../ToggleCaret';
import { TooltipLabel } from '../TooltipLabel';
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
  disabled?: boolean;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  labelAttentionIndicatorColorToken?: ColorTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  selectedChainTypographyToken?: TypographyTokens;
};

export const ChainSelector: React.FunctionComponent<ChainSelectorProps> = ({
  chainOptions,
  selectedChainId,
  onChainChange,
  approving,
  disabled = false,
  label,
  labelColorToken,
  labelTypographyToken,
  labelAttentionIndicatorColorToken,
  tooltip,
  tooltipColorToken,
  selectedChainTypographyToken = 'bodyMediumRegular',
}) => {
  const [width, setWidth] = useState(0);
  const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
  const handleSubmenuOpen = () => {
    if (disabled) {
      return;
    }
    setIsSubmenuOpened(true);
  };
  const handleSubmenuClose = () => {
    if (disabled) {
      return;
    }
    setIsSubmenuOpened(false);
  };
  const handleChainOptionSelection = (chainId: ChainOption['id']) => {
    if (disabled) {
      return;
    }
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
        <TooltipLabel
          attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
          data-testid="ChainSelector-TooltipLabel"
          label={label}
          labelColorToken={labelColorToken}
          labelTypographyToken={labelTypographyToken}
          tooltip={tooltip}
          tooltipColorToken={tooltipColorToken}
        />
        <SelectorBox ref={parentRef} data-testid="ChainSelector-SelectorBox" disabled={disabled}>
          {selectedChain ? (
            <IconBox data-testid="ChainSelector-IconBox">
              <selectedChain.Icon data-testid={`ChainSelector-${selectedChain.name}`} />
            </IconBox>
          ) : null}
          <ChainSelectorButton
            data-testid={isSubmenuOpened ? 'OpenChainSelectorButton' : 'ChainSelectorButton'}
            disabled={disabled}
            isPopoverOpen={isSubmenuOpened}
            typographyToken={selectedChainTypographyToken}
            onClick={handleSubmenuOpen}
          >
            <React.Fragment>
              {approving
                ? 'Approve in wallet...'
                : !selectedChain
                ? 'Pick a network'
                : selectedChain.name}
              {disabled ? null : <ToggleCaret disabled={disabled} isOpen={isSubmenuOpened} />}
            </React.Fragment>
          </ChainSelectorButton>
        </SelectorBox>
      </Box>
    </Popover>
  );
};
