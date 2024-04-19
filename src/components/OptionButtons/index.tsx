import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TooltipLabel } from '../TooltipLabel';
import { OptionButton, OptionButtonsBox, OptionButtonsWrapperBox } from './OptionButtons.styled';

export type OptionsProps = {
  activeOptionId: string;
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  onOptionClick: (optionId: string) => void;
  options: {
    activeBackgroundColorToken?: ColorTokens;
    activeBorderColorToken?: ColorTokens;
    activeHoverBorderColorToken?: ColorTokens;
    activeTypographyColorToken?: ColorTokens;
    backgroundColorToken: ColorTokens;
    borderColorToken: ColorTokens;
    hoverBorderColorToken: ColorTokens;
    id: string;
    label: string;
    typographyColorToken: ColorTokens;
  }[];
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  typographyToken: TypographyTokens;
};

export const OptionButtons: React.FunctionComponent<OptionsProps> = ({
  labelAttentionIndicatorColorToken,
  labelTypographyToken,
  labelColorToken,
  label,
  tooltipColorToken,
  tooltip,
  typographyToken,
  options,
  activeOptionId,
  onOptionClick,
}) => {
  return (
    <OptionButtonsWrapperBox data-testid="OptionButtons-OptionButtonsWrapperBox">
      <TooltipLabel
        attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
        data-testid="OptionButtons-TooltipLabel"
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <OptionButtonsBox data-testid="OptionButtons-OptionButtonsBox">
        {options.map(
          ({
            id,
            label: optionLabel,
            backgroundColorToken,
            activeBackgroundColorToken,
            borderColorToken,
            activeBorderColorToken,
            hoverBorderColorToken,
            activeHoverBorderColorToken,
            typographyColorToken,
            activeTypographyColorToken,
          }) => {
            const isActive = id === activeOptionId;

            const backgroundColorTokenComputed = isActive
              ? activeBackgroundColorToken || backgroundColorToken
              : backgroundColorToken;
            const borderColorTokenComputed = isActive
              ? activeBorderColorToken || borderColorToken
              : borderColorToken;
            const hoverBorderColorTokenComputed = isActive
              ? activeHoverBorderColorToken || hoverBorderColorToken
              : hoverBorderColorToken;
            const typographyColorTokenComputed = isActive
              ? activeTypographyColorToken || typographyColorToken
              : typographyColorToken;

            return (
              <OptionButton
                key={id}
                backgroundColorToken={backgroundColorTokenComputed}
                borderColorToken={borderColorTokenComputed}
                data-testid={`OptionButtons-OptionButton-${id}`}
                hoverBorderColorToken={hoverBorderColorTokenComputed}
                isActive={isActive}
                rounded={true}
                typographyColorToken={typographyColorTokenComputed}
                typographyToken={typographyToken}
                onClick={typeof onOptionClick === 'function' ? () => onOptionClick(id) : undefined}
              >
                {optionLabel}
              </OptionButton>
            );
          },
        )}
      </OptionButtonsBox>
    </OptionButtonsWrapperBox>
  );
};
