import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import BackgroundNoiseImage from './assets/background-noise.png';
import { ReactComponent as BrandSvg } from './assets/brand.svg';

export const PageBox = styled('div')`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const ChildrenBox = styled('div')`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundBox = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from -55.74deg at 44.58% 42.11%,
    ${colors.liberty8} 0deg,
    ${colors.liberty6} 167.49deg,
    ${colors.liberty8} 360deg
  );
`;

export const BrandLogo = styled(BrandSvg)`
  position: fixed;
  left: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

export const BackgroundNoiseBox = styled('div')`
  background-image: url(${BackgroundNoiseImage});
  background-repeat: repeat;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 2;
  width: 100%;
  height: 100%;
`;
