import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph';
import { GlyphProps, ThemeContext } from '@visx/xychart';
import React, { useContext } from 'react';

import { VisxChartDatum } from '../../types';
import { SharedIntegrationProps } from '../types';

export const Glyph = ({
  x,
  y,
  size,
  color,
  onPointerMove,
  onPointerOut,
  onPointerUp,
  glyphComponent,
}: GlyphProps<VisxChartDatum> & Pick<SharedIntegrationProps, 'glyphComponent'>) => {
  const theme = useContext(ThemeContext);
  const glyphOutline = theme.gridStyles.stroke;
  const handlers = { onPointerMove, onPointerOut, onPointerUp };
  if (glyphComponent === 'star') {
    return (
      <GlyphStar
        fill={color}
        left={x}
        size={size * 10}
        stroke={glyphOutline}
        top={y}
        {...handlers}
      />
    );
  }
  if (glyphComponent === 'circle') {
    return (
      <GlyphDot fill={color} left={x} r={size / 2} stroke={glyphOutline} top={y} {...handlers} />
    );
  }
  if (glyphComponent === 'cross') {
    return (
      <GlyphCross
        fill={color}
        left={x}
        size={size * 10}
        stroke={glyphOutline}
        top={y}
        {...handlers}
      />
    );
  }
  return (
    <text dx="-0.75em" dy="0.25em" fontSize={14} x={x} y={y} {...handlers}>
      🍍
    </text>
  );
};
