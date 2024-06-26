import React, { SVGProps } from 'react';

import { ReactComponent as AAveIcon } from './assets/aave.svg';
import { ReactComponent as CompoundIcon } from './assets/compound.svg';
import { ReactComponent as GlpIcon } from './assets/glp.svg';
import { ReactComponent as LidoIcon } from './assets/lido.svg';
import { ReactComponent as RocketIcon } from './assets/rocket.svg';
import { ReactComponent as SOFRIcon } from './assets/sofr.svg';
import { ReactComponent as SOLIcon } from './assets/sol.svg';

export type IconProps = {
  className?: string;
  'data-testid'?: string;
  height?: number;
  market: SupportedMarkets | string;
  width?: number;
};

export type SupportedMarkets = 'aave' | 'compound' | 'glp' | 'sofr' | 'lido' | 'rocket' | 'sol';

export const MarketIconMap: Record<
  SupportedMarkets,
  React.FunctionComponent<SVGProps<SVGSVGElement>>
> = {
  aave: AAveIcon,
  compound: CompoundIcon,
  glp: GlpIcon,
  lido: LidoIcon,
  rocket: RocketIcon,
  sofr: SOFRIcon,
  sol: SOLIcon,
};

export const Icon: React.FunctionComponent<IconProps> = ({
  'data-testid': dataTestId,
  market,
  className,
  width = 40,
  height = 40,
}) => {
  const SupportedIcon = MarketIconMap[market.toLowerCase() as SupportedMarkets];
  if (!SupportedIcon) {
    return null;
  }
  return (
    <SupportedIcon
      className={className}
      data-testid={dataTestId || `Icon-${market}`}
      height={height}
      viewBox="0 0 40 40"
      width={width}
    />
  );
};
