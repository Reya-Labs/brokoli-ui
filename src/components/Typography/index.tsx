import React from 'react';

import { ColorTokens } from '../../foundation/Colors/colors';
import { getColorFromToken } from '../../foundation/Colors/getColorFromToken';
import {
  PrimaryBodyExtraLargeBoldTypography,
  PrimaryBodyExtraLargeRegularTypography,
  PrimaryBodyLargeBoldTypography,
  PrimaryBodyLargeRegularTypography,
  PrimaryBodyMediumBoldTypography,
  PrimaryBodyMediumRegularTypography,
  PrimaryBodySmallBoldTypography,
  PrimaryBodySmallRegularTypography,
  PrimaryBodyXSmallBoldTypography,
  PrimaryBodyXSmallRegularTypography,
  PrimaryHeader1BlackTypography,
  PrimaryHeader1BoldTypography,
  PrimaryHeader2BlackTypography,
  PrimaryHeader2BoldTypography,
  PrimaryHeader3BlackTypography,
  PrimaryHeader3BoldTypography,
  SecondaryBodyMediumBoldTypography,
  SecondaryBodyMediumRegularTypography,
  SecondaryBodySmallBoldTypography,
  SecondaryBodySmallRegularTypography,
  SecondaryBodyXSmallBoldTypography,
  SecondaryBodyXSmallRegularTypography,
} from './Typography.styled';

export type TypographyToken =
  | 'primaryHeader1Black'
  | 'primaryHeader1Bold'
  | 'primaryHeader2Black'
  | 'primaryHeader2Bold'
  | 'primaryHeader3Black'
  | 'primaryHeader3Bold'
  | 'primaryBodyXSmallRegular'
  | 'primaryBodyXSmallBold'
  | 'primaryBodySmallRegular'
  | 'primaryBodySmallBold'
  | 'primaryBodyMediumRegular'
  | 'primaryBodyMediumBold'
  | 'primaryBodyLargeRegular'
  | 'primaryBodyLargeBold'
  | 'primaryBodyExtraLargeRegular'
  | 'primaryBodyExtraLargeBold'
  | 'secondaryBodyXSmallRegular'
  | 'secondaryBodyXSmallBold'
  | 'secondaryBodySmallRegular'
  | 'secondaryBodySmallBold'
  | 'secondaryBodyMediumRegular'
  | 'secondaryBodyMediumBold';

export const TypographyUIMap: Record<
  TypographyToken,
  React.FunctionComponent<{
    className?: string;
    color: string;
  }>
> = {
  primaryHeader1Black: PrimaryHeader1BlackTypography,
  primaryHeader1Bold: PrimaryHeader1BoldTypography,
  primaryHeader2Black: PrimaryHeader2BlackTypography,
  primaryHeader2Bold: PrimaryHeader2BoldTypography,
  primaryHeader3Black: PrimaryHeader3BlackTypography,
  primaryHeader3Bold: PrimaryHeader3BoldTypography,
  primaryBodyXSmallRegular: PrimaryBodyXSmallRegularTypography,
  primaryBodyXSmallBold: PrimaryBodyXSmallBoldTypography,
  primaryBodySmallRegular: PrimaryBodySmallRegularTypography,
  primaryBodySmallBold: PrimaryBodySmallBoldTypography,
  primaryBodyMediumRegular: PrimaryBodyMediumRegularTypography,
  primaryBodyMediumBold: PrimaryBodyMediumBoldTypography,
  primaryBodyLargeRegular: PrimaryBodyLargeRegularTypography,
  primaryBodyLargeBold: PrimaryBodyLargeBoldTypography,
  primaryBodyExtraLargeRegular: PrimaryBodyExtraLargeRegularTypography,
  primaryBodyExtraLargeBold: PrimaryBodyExtraLargeBoldTypography,

  secondaryBodyXSmallRegular: SecondaryBodyXSmallRegularTypography,
  secondaryBodyXSmallBold: SecondaryBodyXSmallBoldTypography,
  secondaryBodySmallRegular: SecondaryBodySmallRegularTypography,
  secondaryBodySmallBold: SecondaryBodySmallBoldTypography,
  secondaryBodyMediumRegular: SecondaryBodyMediumRegularTypography,
  secondaryBodyMediumBold: SecondaryBodyMediumBoldTypography,
};

export type TypographyProps = {
  typographyToken: TypographyToken;
  colorToken: ColorTokens;
  className?: string;
};
export const Typography: React.FunctionComponent<TypographyProps> = ({
  className,
  children,
  typographyToken,
  colorToken,
}) => {
  const TypographyUI = TypographyUIMap[typographyToken] || PrimaryBodyLargeRegularTypography;
  return (
    <TypographyUI className={className} color={getColorFromToken(colorToken)}>
      {children}
    </TypographyUI>
  );
};
