import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { LAYER_INDEXES } from '../../foundation/LayerIndexes';
import BackgroundNoiseImage from './assets/background-noise.png';

export const PageBox = styled('div')`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const PageContentBox = styled('div')`
  z-index: ${LAYER_INDEXES.PAGE_CONTENT};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundBox = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${LAYER_INDEXES.BACKGROUND};
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from -55.74deg at 44.58% 42.11%,
    ${colors.liberty8} 0deg,
    ${colors.liberty6} 167.49deg,
    ${colors.liberty8} 360deg
  );
`;

const BrandLogoBox = styled('div')`
  position: fixed;
  width: 100vw;
  height: 35vh;
  pointer-events: none;
  z-index: ${LAYER_INDEXES.BRAND_LOGO};
  transform: matrix(1, -0.12, 0.15, 1, 0, 0);
`;

export const BrandLogoBox1 = styled(BrandLogoBox)`
  left: -14vw;
  top: 88vh;
  box-shadow: 0px 0px 4px ${colors.ultramarineBlue}, 0px 2px 4px ${colors.wildStrawberry};
`;

export const BrandLogoBox2 = styled(BrandLogoBox)`
  left: -17vw;
  top: 92vh;
  box-shadow: 0px 0px 4px ${colors.wildStrawberry}, 0px 2px 4px ${colors.wildStrawberry};
`;

export const BrandLogoBox3 = styled(BrandLogoBox)`
  left: -20vw;
  top: 96vh;
  box-shadow: 0px 0px 4px ${colors.ultramarineBlue}, 0px 2px 4px ${colors.ultramarineBlue};
`;

export const BackgroundNoiseBox = styled('div')`
  background-image: url(${BackgroundNoiseImage});
  background-repeat: repeat;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${LAYER_INDEXES.BACKGROUND_NOISE};
  width: 100%;
  height: 100%;
`;
