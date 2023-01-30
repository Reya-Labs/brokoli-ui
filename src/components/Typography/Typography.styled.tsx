import styled from '@emotion/styled';

import {
  bodyExtraLargeBoldCSS,
  bodyExtraLargeRegularCSS,
  bodyLargeBoldCSS,
  bodyLargeRegularCSS,
  bodyMediumBoldCSS,
  bodyMediumRegularCSS,
  bodySmallBoldCSS,
  bodySmallRegularCSS,
  bodyXSmallBoldCSS,
  bodyXSmallRegularCSS,
  header1BlackCSS,
  header1BoldCSS,
  header2BlackCSS,
  header2BoldCSS,
  header3BoldCSS,
} from './Typography.css';

export const Header1BlackTypography = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${header1BlackCSS};
  color: ${({ color }) => color};
`;
export const Header1BoldTypography = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${header1BoldCSS};
  color: ${({ color }) => color};
`;
export const Header2BlackTypography = styled('h2', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${header2BlackCSS};
  color: ${({ color }) => color};
`;
export const Header2BoldTypography = styled('h2', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${header2BoldCSS};
  color: ${({ color }) => color};
`;
export const Header3BlackTypography = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${header2BlackCSS};
  color: ${({ color }) => color};
`;
export const Header3BoldTypography = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${header3BoldCSS};
  color: ${({ color }) => color};
`;
export const BodyXSmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyXSmallRegularCSS};
  color: ${({ color }) => color};
`;
export const BodyXSmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyXSmallBoldCSS};
  color: ${({ color }) => color};
`;
export const BodySmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodySmallRegularCSS};
  color: ${({ color }) => color};
`;
export const BodySmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodySmallBoldCSS};
  color: ${({ color }) => color};
`;
export const BodyMediumRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyMediumRegularCSS};
  color: ${({ color }) => color};
`;
export const BodyMediumBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyMediumBoldCSS};
  color: ${({ color }) => color};
`;
export const BodyLargeRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyLargeRegularCSS};
  color: ${({ color }) => color};
`;
export const BodyLargeBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyLargeBoldCSS};
  color: ${({ color }) => color};
`;
export const BodyExtraLargeRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyExtraLargeRegularCSS};
  color: ${({ color }) => color};
`;
export const BodyExtraLargeBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${bodyExtraLargeBoldCSS};
  color: ${({ color }) => color};
`;
