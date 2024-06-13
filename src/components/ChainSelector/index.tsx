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
  approving?: boolean;
  chainOptions: ChainOption[];
  disabled?: boolean;
  disabledOptions?: Record<ChainOption, boolean>;
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  onChainChange: (optionId: ChainOption) => void;
  selectedChainId?: ChainOption | null;
  selectedChainTypographyToken?: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
};

export const ChainSelector: React.FunctionComponent<ChainSelectorProps> = ({
  chainOptions,
  selectedChainId,
  onChainChange,
  approving,
  disabled = false,
  disabledOptions,
  label,
  labelColorToken,
  labelTypographyToken,
  labelAttentionIndicatorColorToken,
  tooltip,
  tooltipColorToken,
  selectedChainTypographyToken = 'bodyMediumMedium',
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
            isDisabled: disabledOptions?.[cId],
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
        <SelectorBox
          ref={parentRef}
          data-testid="ChainSelector-SelectorBox"
          disabled={disabled}
          onClick={isSubmenuOpened ? handleSubmenuClose : handleSubmenuOpen}
        >
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
