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
        colorToken={highlight ? 'lavenderWeb' : 'white800'}
        typographyToken="primaryBodySmallRegular"
      >
        BROK
      </Typography>
    </ColorBackgroundBox>
    <ColorTypographyBox>
      <Typography colorToken="liberty4" typographyToken="primaryBodyMediumBold">
        {name}
      </Typography>
      <Typography colorToken="liberty7" typographyToken="primaryBodySmallRegular">
        {backgroundColor.toUpperCase()}
      </Typography>
    </ColorTypographyBox>
  </ColorTileBox>
);
