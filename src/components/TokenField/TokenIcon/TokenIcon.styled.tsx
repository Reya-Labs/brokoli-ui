import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as AAve } from './assets/aave.svg';
import { ReactComponent as Compound } from './assets/compound.svg';
import { ReactComponent as Dai } from './assets/dai.svg';
import { ReactComponent as Eth } from './assets/eth.svg';
import { ReactComponent as Glp } from './assets/glp.svg';
import { ReactComponent as REth } from './assets/reth.svg';
import { ReactComponent as StEth } from './assets/steth.svg';
import { ReactComponent as USDC } from './assets/usdc.svg';
import { ReactComponent as USDT } from './assets/usdt.svg';

const svgCSS = css`
  width: 22px;
  height: 22px;
`;
export const AAveIcon = styled(AAve)<{ viewBox: string }>`
  ${svgCSS};
`;
export const CompoundIcon = styled(Compound)<{ viewBox: string }>`
  ${svgCSS};
`;
export const DaiIcon = styled(Dai)<{ viewBox: string }>`
  ${svgCSS};
`;
export const EthIcon = styled(Eth)<{ viewBox: string }>`
  ${svgCSS};
`;
export const GlpIcon = styled(Glp)<{ viewBox: string }>`
  ${svgCSS};
`;
export const REthIcon = styled(REth)<{ viewBox: string }>`
  ${svgCSS};
`;
export const StEthIcon = styled(StEth)<{ viewBox: string }>`
  ${svgCSS};
`;
export const USDCIcon = styled(USDC)<{ viewBox: string }>`
  ${svgCSS};
`;
export const USDTIcon = styled(USDT)<{ viewBox: string }>`
  ${svgCSS};
`;
