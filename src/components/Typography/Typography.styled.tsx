import styled from '@emotion/styled';

import {
  primaryBodyExtraLargeBoldCSS,
  primaryBodyExtraLargeRegularCSS,
  primaryBodyLargeBoldCSS,
  primaryBodyLargeRegularCSS,
  primaryBodyMediumBoldCSS,
  primaryBodyMediumRegularCSS,
  primaryBodySmallBoldCSS,
  primaryBodySmallRegularCSS,
  primaryBodyXSmallBoldCSS,
  primaryBodyXSmallRegularCSS,
  primaryHeader1BlackCSS,
  primaryHeader1BoldCSS,
  primaryHeader2BlackCSS,
  primaryHeader2BoldCSS,
  primaryHeader3BlackCSS,
  primaryHeader3BoldCSS,
  secondaryBodyMediumBoldCSS,
  secondaryBodyMediumRegularCSS,
  secondaryBodySmallBoldCSS,
  secondaryBodySmallRegularCSS,
  secondaryBodyXSmallBoldCSS,
  secondaryBodyXSmallRegularCSS,
} from './Typography.css';

export const PrimaryHeader1BlackTypography = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryHeader1BlackCSS};
  color: ${({ color }) => color};
`;

export const PrimaryHeader1BoldTypography = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryHeader1BoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryHeader2BlackTypography = styled('h2', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryHeader2BlackCSS};
  color: ${({ color }) => color};
`;

export const PrimaryHeader2BoldTypography = styled('h2', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryHeader2BoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryHeader3BlackTypography = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryHeader3BlackCSS};
  color: ${({ color }) => color};
`;

export const PrimaryHeader3BoldTypography = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryHeader3BoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyXSmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyXSmallRegularCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyXSmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyXSmallBoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodySmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodySmallRegularCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodySmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodySmallBoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyMediumRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyMediumRegularCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyMediumBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyMediumBoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyLargeRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyLargeRegularCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyLargeBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyLargeBoldCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyExtraLargeRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyExtraLargeRegularCSS};
  color: ${({ color }) => color};
`;

export const PrimaryBodyExtraLargeBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${primaryBodyExtraLargeBoldCSS};
  color: ${({ color }) => color};
`;

export const SecondaryBodyMediumBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${secondaryBodyMediumBoldCSS};
  color: ${({ color }) => color};
`;

export const SecondaryBodyMediumRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${secondaryBodyMediumRegularCSS};
  color: ${({ color }) => color};
`;

export const SecondaryBodySmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${secondaryBodySmallBoldCSS};
  color: ${({ color }) => color};
`;

export const SecondaryBodySmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${secondaryBodySmallRegularCSS};
  color: ${({ color }) => color};
`;

export const SecondaryBodyXSmallBoldTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${secondaryBodyXSmallBoldCSS};
  color: ${({ color }) => color};
`;

export const SecondaryBodyXSmallRegularTypography = styled('p', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  margin: 0;
  padding: 0;
  ${secondaryBodyXSmallRegularCSS};
  color: ${({ color }) => color};
`;
