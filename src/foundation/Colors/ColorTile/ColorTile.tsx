import React from 'react';

import { Typography } from '../../../components/Typography';
import { ColorBackgroundBox, ColorTileBox, ColorTypographyBox } from './ColorTile.styled';

type ColorTileProps = { name: string; backgroundColor: string; highlight: boolean };

export const ColorTile: React.FunctionComponent<ColorTileProps> = ({
  highlight,
  name,
  backgroundColor,
}) => (
  <ColorTileBox>
    <ColorBackgroundBox backgroundColor={backgroundColor}>
      <Typography
        colorToken={highlight ? 'white100' : 'black400'}
        typographyToken="bodySmallRegular"
      >
        brokoli-ui
      </Typography>
    </ColorBackgroundBox>
    <ColorTypographyBox>
      <Typography colorToken="black500" typographyToken="bodyMediumBold">
        {name}
      </Typography>
      <Typography colorToken="black800" typographyToken="bodySmallRegular">
        {backgroundColor.toUpperCase()}
      </Typography>
    </ColorTypographyBox>
  </ColorTileBox>
);
