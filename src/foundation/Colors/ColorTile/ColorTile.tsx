import React from 'react';

import { ColorTileBox, ColorTileCircle, ColorTypographyBox } from './ColorTile.styled';

type ColorTileProps = { name: string; backgroundColor: string; highlight: boolean };

export const ColorTile: React.FunctionComponent<ColorTileProps> = ({
  highlight,
  name,
  backgroundColor,
}) => (
  <ColorTileBox>
    <ColorTileCircle backgroundColor={backgroundColor} highlight={highlight} />
    <ColorTypographyBox>
      <span>{`${name[0].toUpperCase()}${name.substring(1)}`}</span>
      <span>{backgroundColor.toUpperCase()}</span>
    </ColorTypographyBox>
  </ColorTileBox>
);
