import { GradientsTheme } from '../../foundation/Gradients/types';
import { colors } from './colors';

const rainbow = `linear-gradient(
    90deg,
    ${colors.error100} 0%,
    ${colors.warning100} 31.47%,
    ${colors.primary100} 68.91%,
    ${colors.secondary100} 100%
)`;

const invertedRainbow = `linear-gradient(
    180deg,
    ${colors.error100} 0%,
    ${colors.warning100} 31.47%,
    ${colors.primary100} 68.91%,
    ${colors.secondary100} 100%
)`;

const background = `conic-gradient(
    from -55.74deg at 44.58% 42.11%,
    ${colors.black900} 0deg,
    ${colors.black700} 167.49deg,
    ${colors.black900} 360deg
)`;

export const gradients: GradientsTheme = {
  background,
  invertedRainbow,
  rainbow,
};
