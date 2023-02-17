import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { ReactComponent as LinesSvg } from './assets/lines.svg';
import TextureImage from './assets/texture.png';

export const PageBox = styled('div')`
  position: relative;
  background: conic-gradient(
    from -55.74deg at 44.58% 42.11%,
    ${colors.liberty8} 0deg,
    ${colors.liberty6} 167.49deg,
    ${colors.liberty8} 360deg
  );
`;

export const ChildrenBox = styled('div')`
  z-index: 2;
  position: relative;
  background-image: url(${TextureImage});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
`;

export const Lines = styled(LinesSvg)`
  position: fixed;
  left: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;
