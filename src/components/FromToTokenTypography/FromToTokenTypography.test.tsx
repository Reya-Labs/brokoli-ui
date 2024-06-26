import React from 'react';

import { render, screen } from '../../test-utils';
import { FromToTokenTypography, FromToTokenTypographyProps } from '.';

describe('<FromToTokenTypography />', () => {
  const defaultProps: FromToTokenTypographyProps = {
    fromColorToken: 'primary500',
    fromValue: '100',
    label: 'From-To',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodySmallMedium',
    toColorToken: 'secondary500',
    toValue: '200',
    typographyToken: 'bodyXSmallBold',
  };

  test('renders correctly with default props', () => {
    render(<FromToTokenTypography {...defaultProps} />);
    expect(
      screen.getByTestId('FromToTokenTypography-FromToTokenTypographyBox'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('FromToTokenTypography-TooltipLabel')).toBeInTheDocument();
    expect(screen.getByTestId('FromToTokenTypography-FromToBox')).toBeInTheDocument();
    expect(screen.getByText('From-To')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('⇢')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });

  test('displays a custom label', () => {
    render(<FromToTokenTypography {...defaultProps} label="Custom Label" />);
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });

  test('displays the correct "from" value', () => {
    render(<FromToTokenTypography {...defaultProps} fromValue="50" />);
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  test('applies the correct color token to the "from" value', () => {
    render(<FromToTokenTypography {...defaultProps} fromColorToken="error500" />);
    const fromTokenTypography = screen.getByTestId(
      'FromToTokenTypography-FromToBox-FromTokenTypography-error500-bodyXSmallBold',
    );
    expect(fromTokenTypography).toBeInTheDocument();
  });
});
