import React from 'react';

import { Typography } from '../../../components/Typography';
import { ColorBackgroundBox, ColorTileBox, ColorTypographyBox } from './ColorTile.styled';

type ColorTileProps = { backgroundColor: string; highlight: boolean; name: string };

export const ColorTile: React.FunctionComponent<ColorTileProps> = ({
  highlight,
  name,
  backgroundColor,
}) => (
  <ColorTileBox>
    <ColorBackgroundBox backgroundColor={backgroundColor}>
      <Typography
        colorToken={highlight ? 'white100' : 'black400'}
        typographyToken="bodySmallMedium"
      >
        brokoli-ui
      </Typography>
    </ColorBackgroundBox>
    <ColorTypographyBox>
      <Typography colorToken="black500" typographyToken="bodyMediumBold">
        {name}
      </Typography>
      <Typography colorToken="black800" typographyToken="bodySmallMedium">
        {backgroundColor.toUpperCase()}
      </Typography>
    </ColorTypographyBox>
  </ColorTileBox>
);
