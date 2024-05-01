import { LineProps, LineSvgProps } from '@nivo/line';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';

export type YMarkerConfig = {
  colorToken: ColorTokens;
  text: string;
  typographyToken: TypographyTokens;
  value: number;
};

type TooltipConfig = {
  token: string;
  tokenColorToken: ColorTokens;
};

export type LineChartTooltipFC = LineProps['tooltip'];
export type LineChartTooltip = LineChartTooltipFC | TooltipConfig;

export type XDataType = number | Date;
export type YDataType = number;
export type LineChartProps = {
  axisBottomFormat?: 'minutes' | 'days' | 'hours';
  axisDomainLineColorToken?: ColorTokens | 'transparent';
  axisTickPadding?: number;
  axisTicksTextColorToken?: ColorTokens;
  axisTypographyToken: TypographyTokens;
  crosshairColorToken: ColorTokens;
  curveType?: LineProps['curve'];
  data: {
    colorToken: ColorTokens;
    data: {
      x: XDataType;
      y: YDataType;
    }[];
    id: string;
    tooltip?: LineChartTooltip;
  }[];
  enablePoints?: LineSvgProps['enablePoints'];
  visibleAxis?: ('top' | 'bottom' | 'right' | 'left')[];
  xFormatter?: (x: XDataType) => string;
  xScaleMax?: XDataType;
  xScaleMin?: XDataType;
  xScaleType?: 'time' | 'linear';
  yFormatter?: (y: YDataType) => string;
  yMarker?: YMarkerConfig;
  yScaleMax?: YDataType;
  yScaleMin?: YDataType;
  yScaleStacked?: boolean;
};
