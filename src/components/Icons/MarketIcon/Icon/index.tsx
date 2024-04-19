import React from 'react';

import { ReactComponent as AAveIcon } from './assets/aave.svg';
import { ReactComponent as CompoundIcon } from './assets/compound.svg';
import { ReactComponent as GlpIcon } from './assets/glp.svg';
import { ReactComponent as LidoIcon } from './assets/lido.svg';
import { ReactComponent as RocketIcon } from './assets/rocket.svg';
import { ReactComponent as SOFRIcon } from './assets/sofr.svg';

export type IconProps = {
  className?: string;
  'data-testid'?: string;
  market: SupportedMarkets | string;
};

export type SupportedMarkets = 'aave' | 'compound' | 'glp' | 'sofr' | 'lido' | 'rocket';

const MarketIconMap: Record<
  SupportedMarkets,
  React.FunctionComponent<{ className?: string; viewBox?: string }>
> = {
  aave: AAveIcon,
  compound: CompoundIcon,
  glp: GlpIcon,
  lido: LidoIcon,
  rocket: RocketIcon,
  sofr: SOFRIcon,
};

export const Icon: React.FunctionComponent<IconProps> = ({
  'data-testid': dataTestId,
  market,
  className,
}) => {
  const SupportedIcon = MarketIconMap[market.toLowerCase() as SupportedMarkets];
  if (!SupportedIcon) {
    return null;
  }
  return (
    <SupportedIcon
      className={className}
      data-testid={dataTestId || `Icon-${market}`}
      viewBox="0 0 40 40"
    />
  );
};
