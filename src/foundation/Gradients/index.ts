import { colors } from '../Colors';

const RAINBOW_GRADIENT = `linear-gradient(
    90deg,
    ${colors.wildStrawberry} 0%,
    ${colors.orangeYellow} 31.47%,
    ${colors.skyBlueCrayola} 68.91%,
    ${colors.ultramarineBlue} 100%
)`;

const INVERTED_RAINBOW_GRADIENT = `linear-gradient(
    180deg,
    ${colors.wildStrawberry} 0%,
    ${colors.orangeYellow} 31.47%,
    ${colors.skyBlueCrayola} 68.91%,
    ${colors.ultramarineBlue} 100%
)`;

const BACKGROUND_GRADIENT = `conic-gradient(
    from -55.74deg at 44.58% 42.11%,
    ${colors.liberty8} 0deg,
    ${colors.liberty6} 167.49deg,
    ${colors.liberty8} 360deg
)`;
export type GradientTokens = 'background' | 'rainbow' | 'invertedRainbow';
export type GradientsType = Record<GradientTokens, string>;

export const gradients: GradientsType = {
  background: BACKGROUND_GRADIENT,
  invertedRainbow: INVERTED_RAINBOW_GRADIENT,
  rainbow: RAINBOW_GRADIENT,
};
