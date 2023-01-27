import styled from '@emotion/styled';

export const Header1BlackTypography = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 120%;

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);
  color: ${({ color }) => color};
`;
export const Header1BoldTypography = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);
  color: ${({ color }) => color};
`;
export const Header2BlackTypography = styled('h2', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);
  color: ${({ color }) => color};
`;
export const Header2BoldTypography = styled('h2', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);
  color: ${({ color }) => color};
`;
export const Header3BlackTypography = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 120%;

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);
  color: ${({ color }) => color};
`;
export const Header3BoldTypography = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;

  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.3);
  color: ${({ color }) => color};
`;
export const BodyXSmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;

  letter-spacing: 0.02em;
  color: ${({ color }) => color};
`;
export const BodyXSmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;

  letter-spacing: 0.02em;
  color: ${({ color }) => color};
`;
export const BodySmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodySmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodyMediumRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodyMediumBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodyLargeRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodyLargeBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodyExtraLargeRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
export const BodyExtraLargeBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: ${({ color }) => color};
`;
