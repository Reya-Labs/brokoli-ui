import { PointTooltipProps } from '@nivo/line';
import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { Typography } from '../../Typography';
import { TooltipBox } from './Tooltip.styled';

// TODO: fix Typography typographyToken
export const Tooltip: React.FunctionComponent<
  PointTooltipProps & {
    colorToken: ColorTokens;
  }
> = ({ point, colorToken }) => {
  return (
    <TooltipBox>
      <Typography colorToken="lavenderWeb" typographyToken="bodyMediumBold">
        {point.data.xFormatted}
      </Typography>
      <Typography colorToken={colorToken} typographyToken="bodyMediumBold">
        {point.data.yFormatted}%
      </Typography>
    </TooltipBox>
  );
};
