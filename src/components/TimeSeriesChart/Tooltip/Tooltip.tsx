import React from 'react';

import { ColorTokens } from '../../../foundation/Colors';
import { TokenTypography } from '../../TokenTypography';
import { Typography } from '../../Typography';
import { TooltipBox } from './Tooltip.styled';

export const Tooltip: React.FunctionComponent<{
  colorToken: ColorTokens;
  yToken: string;
  tokenColorToken: ColorTokens;
  point: {
    data: {
      xFormatted: string | undefined;
      yFormatted: string | undefined;
    };
  };
}> = ({ point, colorToken, yToken, tokenColorToken }) => {
  return (
    <TooltipBox>
      {!point.data.xFormatted ? null : (
        <Typography colorToken="white100" typographyToken="bodyMediumBold">
          {point.data.xFormatted}
        </Typography>
      )}
      {!point.data.yFormatted ? null : (
        <TokenTypography
          colorToken={colorToken}
          token={yToken}
          tokenColorToken={tokenColorToken}
          typographyToken="bodyMediumBold"
          value={point.data.yFormatted}
        />
      )}
    </TooltipBox>
  );
};
