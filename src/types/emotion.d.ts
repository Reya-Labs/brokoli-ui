// eslint-disable-next-line simple-import-sort/imports
import '@emotion/react';
import { ColorsTheme } from '../foundation/Colors';
import { GradientsTheme } from '../foundation/Gradients';
import { LayerIndexesTheme } from '../foundation/LayerIndexes';
import { TypographyTheme } from '../foundation/Typography';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTheme;
    gradients: GradientsTheme;
    layerIndexes: LayerIndexesTheme;
    typography: TypographyTheme;
  }
}
