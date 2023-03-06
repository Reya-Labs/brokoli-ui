import React from 'react';

import {
  BackgroundBox,
  BackgroundNoiseBox,
  BrandLogoBox1,
  BrandLogoBox2,
  BrandLogoBox3,
  PageBox,
  PageContentBox,
} from './Page.styled';

export const Page: React.FunctionComponent = ({ children }) => (
  <PageBox data-testid="Page-PageBox">
    <PageContentBox data-testid="Page-PageContentBox">{children}</PageContentBox>
    <BackgroundBox data-testid="Page-BackgroundBox" />
    <BrandLogoBox1 data-testid="Page-BrandLogoBox1" />
    <BrandLogoBox2 data-testid="Page-BrandLogoBox2" />
    <BrandLogoBox3 data-testid="Page-BrandLogoBox3" />
    <BackgroundNoiseBox data-testid="Page-BackgroundNoiseBox" />
  </PageBox>
);
