import { PointTooltipProps } from '@nivo/line';
import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TokenTypography } from '../../TokenTypography';
import { Typography } from '../../Typography';
import { TooltipBox } from './Tooltip.styled';

export const Tooltip: React.FunctionComponent<
  PointTooltipProps & {
    colorToken: ColorTokens;
    tokenColorToken: ColorTokens;
    yToken: string;
  }
> = ({ point, colorToken, yToken, tokenColorToken }) => {
  return (
    <TooltipBox>
      <Typography colorToken="white100" typographyToken="bodyMediumBold">
        {point.data.xFormatted}
      </Typography>
      <TokenTypography
        colorToken={colorToken}
        token={yToken}
        tokenColorToken={tokenColorToken}
        typographyToken="bodyMediumBold"
        value={point.data.yFormatted}
      />
    </TooltipBox>
  );
};
