import React from 'react';

import { render, screen } from '../../test-utils';
import { Skeleton } from '.';

describe('<Skeleton />', () => {
  it('renders a rectangular skeleton with default props', () => {
    // @ts-ignore
    render(<Skeleton />);
    const skeletonBox = screen.getByTestId('Skeleton-SkeletonBox-rectangular');

    expect(skeletonBox).toBeInTheDocument();
  });

  it('renders a circular skeleton with custom props', () => {
    render(
      <Skeleton colorToken="white100" typographyToken="primaryBodyMediumBold" variant="circular" />,
    );
    const skeletonBox = screen.getByTestId('Skeleton-SkeletonBox-circular-primaryBodyMediumBold');

    expect(skeletonBox).toBeInTheDocument();
  });

  it('renders with custom className and data-testid props', () => {
    render(
      <Skeleton
        className="custom-class"
        colorToken="white100"
        data-testid="custom-test-id"
        typographyToken="primaryBodyMediumBold"
        variant="circular"
      />,
    );
    const skeletonBox = screen.getByTestId('custom-test-id');

    expect(skeletonBox).toBeInTheDocument();
  });
});
