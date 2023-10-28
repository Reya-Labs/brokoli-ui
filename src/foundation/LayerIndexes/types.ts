export type LayerIndexToken =
  | 'background'
  | 'backgroundNoise'
  | 'dialog'
  | 'pageContent'
  | 'popover'
  | 'tooltip';

export type LayerIndexesTheme = Record<LayerIndexToken, number>;
