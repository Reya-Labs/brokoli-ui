import { LineProps, LineSvgProps } from '@nivo/line';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';

export type YMarkerConfig = {
  value: number;
  text: string;
  colorToken: ColorTokens;
  typographyToken: TypographyTokens;
};

export type TooltipConfig = {
  token: string;
  tokenColorToken: ColorTokens;
};

export type XDataType = number | Date;
export type YDataType = number;
export type LineChartProps = {
  curveType?: LineProps['curve'];
  xScaleType?: 'time' | 'linear';
  data: {
    id: string;
    colorToken: ColorTokens;
    tooltip: TooltipConfig;
    data: {
      x: XDataType;
      y: YDataType;
    }[];
  }[];
  yMarker?: YMarkerConfig;
  axisTypographyToken: TypographyTokens;
  axisBottomFormat: 'minutes' | 'days' | 'hours';
  yScaleStacked?: boolean;
  crosshairColorToken: ColorTokens;
  axisTicksTextColorToken?: ColorTokens;
  axisDomainLineColorToken?: ColorTokens | 'transparent';
  visibleAxis?: ('top' | 'bottom' | 'right' | 'left')[];
  axisTickPadding?: number;
  enablePoints?: LineSvgProps['enablePoints'];
  yScaleMax?: YDataType;
  yScaleMin?: YDataType;
  xScaleMax?: XDataType;
  xScaleMin?: XDataType;
};
