import React from 'react';

import { PercentageTypography } from '../PercentageTypography';
import { Typography } from '../Typography';
import { ReactComponent as ArrowsSvg } from './arrows.svg';
import {
  BottomTextContent,
  NotionalSwapBox,
  NotionalSwapFixedBox,
  NotionalSwapSwapper,
  NotionalSwapVariableBox,
  TopTextContent,
} from './NotionalSwap.styled';

export const NotionalSwap: React.FunctionComponent<{
  fixedRate: number;
  variableRate: number;
  mode: 'fixed' | 'variable';
  onSwap: (nextMode: 'fixed' | 'variable') => void;
}> = ({ variableRate, mode, onSwap, fixedRate }) => {
  return (
    <NotionalSwapBox reverse={mode === 'variable'}>
      <NotionalSwapFixedBox>
        <TopTextContent>
          <Typography colorToken="lavenderWeb" typographyToken="primaryBodyMediumBold">
            Receive Fixed
          </Typography>
          <PercentageTypography
            colorToken="skyBlueCrayola"
            typographyToken="primaryBodyMediumBold"
            value={fixedRate}
          />
        </TopTextContent>
        <BottomTextContent>
          <Typography colorToken="lavenderWeb2" typographyToken="primaryBodyMediumRegular">
            Pay Variable {fixedRate}%
          </Typography>
        </BottomTextContent>
      </NotionalSwapFixedBox>
      <NotionalSwapSwapper onClick={() => onSwap(mode === 'fixed' ? 'variable' : 'fixed')}>
        <ArrowsSvg />
      </NotionalSwapSwapper>
      <NotionalSwapVariableBox>
        <TopTextContent>
          <Typography colorToken="lavenderWeb2" typographyToken="primaryBodyMediumBold">
            Receive Variable
          </Typography>
          <PercentageTypography
            colorToken="ultramarineBlue"
            typographyToken="primaryBodyMediumBold"
            value={variableRate}
          />
        </TopTextContent>
        <BottomTextContent>
          <Typography colorToken="lavenderWeb4" typographyToken="primaryBodyMediumRegular">
            Pay Fixed {variableRate}%
          </Typography>
        </BottomTextContent>
      </NotionalSwapVariableBox>
    </NotionalSwapBox>
  );
};
