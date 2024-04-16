import React from 'react';

import { TokenTypography } from '../../../TokenTypography';
import { Typography } from '../../../Typography';
import { LineChartTooltipFC } from '../../types';
import { Box, RowBox } from './CustomChartTooltip.styled';

type LineChartTooltipProps = React.ComponentProps<NonNullable<LineChartTooltipFC>>;
export const CustomChartTooltip: React.FunctionComponent<
  LineChartTooltipProps & {
    quoteToken: string;
    underlyingAsset: string;
  }
> = ({ point, quoteToken, underlyingAsset }) => {
  if (!point) {
    return null;
  }
  const data = point.data as unknown as {
    x: number;
    y: number;
    metadata: {
      price: number;
      priceImpact: number;
      totalCost: number;
      totalSize: number;
    };
  };
  const price = data.x;
  const size = data.y;
  const totalCost = data.metadata.totalCost;
  const priceImpact = data.metadata.priceImpact;

  const priceFormatted = price.toLocaleString();
  const sizeFormatted = size.toLocaleString();
  const totalCostFormatted = totalCost.toLocaleString();
  const priceImpactFormatted = priceImpact.toLocaleString();

  return (
    <Box>
      <RowBox>
        <Typography colorToken="white950" typographyToken="bodyXSmallRegular">
          Price
        </Typography>
        <TokenTypography
          colorToken="white100"
          token={` ${underlyingAsset}`}
          tokenColorToken="white950"
          typographyToken="bodySmallMedium"
          value={priceFormatted}
        />
      </RowBox>
      <RowBox>
        <Typography colorToken="white950" typographyToken="bodyXSmallRegular">
          Total size
        </Typography>
        <TokenTypography
          colorToken="white100"
          token={` ${quoteToken}`}
          tokenColorToken="white950"
          typographyToken="bodySmallMedium"
          value={sizeFormatted}
        />
      </RowBox>
      <RowBox>
        <Typography colorToken="white950" typographyToken="bodyXSmallRegular">
          Total Cost
        </Typography>
        <TokenTypography
          colorToken="white100"
          token={` ${underlyingAsset}`}
          tokenColorToken="white950"
          typographyToken="bodySmallMedium"
          value={totalCostFormatted}
        />
      </RowBox>
      <RowBox>
        <Typography colorToken="white950" typographyToken="bodyXSmallRegular">
          Total size
        </Typography>
        <TokenTypography
          colorToken="white100"
          token={` ${underlyingAsset}`}
          tokenColorToken="white950"
          typographyToken="bodySmallMedium"
          value={priceImpactFormatted}
        />
      </RowBox>
    </Box>
  );
};
