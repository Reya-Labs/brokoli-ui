import React from 'react';

import { ColorTokens } from '../../foundation/Colors/colors';
import { getColorFromToken } from '../../foundation/Colors/getColorFromToken';
import {
  BodyExtraLargeBoldTypography,
  BodyExtraLargeRegularTypography,
  BodyLargeBoldTypography,
  BodyLargeRegularTypography,
  BodyMediumBoldTypography,
  BodyMediumRegularTypography,
  BodySmallBoldTypography,
  BodySmallRegularTypography,
  BodyXSmallBoldTypography,
  BodyXSmallRegularTypography,
  Header1BlackTypography,
  Header1BoldTypography,
  Header2BlackTypography,
  Header2BoldTypography,
  Header3BlackTypography,
  Header3BoldTypography,
} from './Typography.styled';

export type TypographyToken =
  | 'header1Black'
  | 'header1Bold'
  | 'header2Black'
  | 'header2Bold'
  | 'header3Black'
  | 'header3Bold'
  | 'bodyXSmallRegular'
  | 'bodyXSmallBold'
  | 'bodySmallRegular'
  | 'bodySmallBold'
  | 'bodyMediumRegular'
  | 'bodyMediumBold'
  | 'bodyLargeRegular'
  | 'bodyLargeBold'
  | 'bodyExtraLargeRegular'
  | 'bodyExtraLargeBold';

export const TypographyUIMap: Record<
  TypographyToken,
  React.FunctionComponent<{
    className?: string;
    color: string;
  }>
> = {
  header1Black: Header1BlackTypography,
  header1Bold: Header1BoldTypography,
  header2Black: Header2BlackTypography,
  header2Bold: Header2BoldTypography,
  header3Black: Header3BlackTypography,
  header3Bold: Header3BoldTypography,
  bodyXSmallRegular: BodyXSmallRegularTypography,
  bodyXSmallBold: BodyXSmallBoldTypography,
  bodySmallRegular: BodySmallRegularTypography,
  bodySmallBold: BodySmallBoldTypography,
  bodyMediumRegular: BodyMediumRegularTypography,
  bodyMediumBold: BodyMediumBoldTypography,
  bodyLargeRegular: BodyLargeRegularTypography,
  bodyLargeBold: BodyLargeBoldTypography,
  bodyExtraLargeRegular: BodyExtraLargeRegularTypography,
  bodyExtraLargeBold: BodyExtraLargeBoldTypography,
};

export type TypographyProps = {
  typographyToken: TypographyToken;
  colorToken?: ColorTokens;
  className?: string;
};
export const Typography: React.FunctionComponent<TypographyProps> = ({
  className,
  children,
  typographyToken,
  colorToken = 'lavenderWeb',
}) => {
  const TypographyUI = TypographyUIMap[typographyToken] || BodyLargeRegularTypography;
  return (
    <TypographyUI className={className} color={getColorFromToken(colorToken)}>
      {children}
    </TypographyUI>
  );
};
