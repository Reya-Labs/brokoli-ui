import React from 'react';

import { Typography } from '../../../components/Typography';
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
      <Typography typographyToken="primaryBodyMediumBold">
        {`${name[0].toUpperCase()}${name.substring(1)}`}
      </Typography>
      <Typography typographyToken="primaryBodySmallRegular">
        {backgroundColor.toUpperCase()}
      </Typography>
    </ColorTypographyBox>
  </ColorTileBox>
);
