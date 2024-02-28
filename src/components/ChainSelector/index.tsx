import React, { useCallback, useState } from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { ChainIcon } from '../Icons';
import { SupportedChainIcons } from '../Icons/ChainIcon/Icon/constants';
import { Popover } from '../Popover';
import { ToggleCaret } from '../ToggleCaret';
import { TooltipLabel } from '../TooltipLabel';
import { ChainOptions } from './ChainOptions/ChainOptions';
import { Box, ChainSelectorButton, IconBox, SelectorBox } from './ChainSelector.styled';
import { CHAIN_NAME_MAP, SupportedChainNames } from './constants';

export type ChainOption = number;
export type ChainSelectorProps = {
  onChainChange: (optionId: ChainOption) => void;
  selectedChainId?: ChainOption | null;
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
  const selectedChainName = CHAIN_NAME_MAP[selectedChainId as SupportedChainNames];
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
  const handleChainOptionSelection = (chainId: ChainOption) => {
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

  if (chainOptions.length === 0) {
    return null;
  }

  return (
    <Popover
      content={
        <ChainOptions
          chainOptions={chainOptions.map((cId) => ({
            id: cId,
            isActive: cId === selectedChainId,
            name: CHAIN_NAME_MAP[cId as SupportedChainNames] || `Unknown chain, ${cId}`,
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
          {selectedChainName && selectedChainId ? (
            <IconBox data-testid="ChainSelector-IconBox">
              <ChainIcon
                chainId={selectedChainId as SupportedChainIcons}
                data-testid={`ChainSelector-${selectedChainName}`}
              />
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
                : !selectedChainId
                ? 'Pick a network'
                : selectedChainName || `Unknown chain, ${selectedChainId}`}
              {disabled ? null : <ToggleCaret disabled={disabled} isOpen={isSubmenuOpened} />}
            </React.Fragment>
          </ChainSelectorButton>
        </SelectorBox>
      </Box>
    </Popover>
  );
};
