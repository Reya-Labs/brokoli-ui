import { PatternLines } from '@visx/pattern';
import { DataContext } from '@visx/xychart';
import React, { useContext } from 'react';

const patternId = 'xy-chart-pattern';

export function CustomChartBackground() {
  const { theme, margin, width, height, innerWidth, innerHeight } = useContext(DataContext);

  // early return values not available in context
  if (width == null || height == null || margin == null || theme == null) return null;

  return (
    <>
      <PatternLines
        height={16}
        id={patternId}
        orientation={['diagonal']}
        stroke={theme?.gridStyles?.stroke}
        strokeWidth={1}
        width={16}
      />
      <rect fill={theme?.backgroundColor ?? '#fff'} height={height} width={width} x={0} y={0} />
      <rect
        fill={`url(#${patternId})`}
        fillOpacity={0.3}
        height={innerHeight}
        width={innerWidth}
        x={margin.left}
        y={margin.top}
      />
    </>
  );
}
