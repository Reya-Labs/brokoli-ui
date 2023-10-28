export type LayerIndexToken =
  | 'background'
  | 'backgroundNoise'
  | 'dialog'
  | 'pageContent'
  | 'popover'
  | 'tooltip';

export type LayerIndexes = Record<LayerIndexToken, number>;

export const layerIndexes: LayerIndexes = {
  background: 0,
  backgroundNoise: 1,
  dialog: 100,
  pageContent: 2,
  popover: 101,
  tooltip: 102,
};
