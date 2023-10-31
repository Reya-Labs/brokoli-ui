import { GradientsTheme } from '../../foundation/Gradients/types';
import { colors } from './colors';

const rainbow = `linear-gradient(
    90deg,
    ${colors.wildStrawberry} 0%,
    ${colors.orangeYellow} 31.47%,
    ${colors.primary100} 68.91%,
    ${colors.secondary100} 100%
)`;

const invertedRainbow = `linear-gradient(
    180deg,
    ${colors.wildStrawberry} 0%,
    ${colors.orangeYellow} 31.47%,
    ${colors.primary100} 68.91%,
    ${colors.secondary100} 100%
)`;

const background = `conic-gradient(
    from -55.74deg at 44.58% 42.11%,
    ${colors.liberty8} 0deg,
    ${colors.liberty6} 167.49deg,
    ${colors.liberty8} 360deg
)`;

export const gradients: GradientsTheme = {
  background,
  invertedRainbow,
  rainbow,
};
