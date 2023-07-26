import { render, screen } from '@testing-library/react';
import React from 'react';

import { LabelFromToTokenTypography, LabelFromToTokenTypographyProps } from '.';

describe('<LabelFromToTokenTypography />', () => {
  const defaultProps: LabelFromToTokenTypographyProps = {
    fromColorToken: 'skyBlueCrayola',
    fromValue: '100',
    label: 'From-To',
    labelColorToken: 'lavenderWeb2',
    labelTypographyToken: 'primaryBodySmallRegular',
    toColorToken: 'ultramarineBlue',
    toValue: '200',
    typographyToken: 'primaryBodyXSmallBold',
  };

  test('renders correctly with default props', () => {
    render(<LabelFromToTokenTypography {...defaultProps} />);
    expect(
      screen.getByTestId('LabelFromToTokenTypography-LabelFromToTokenTypographyBox'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('LabelFromToTokenTypography-TooltipLabel')).toBeInTheDocument();
    expect(screen.getByTestId('LabelFromToTokenTypography-FromToBox')).toBeInTheDocument();
    expect(screen.getByText('From-To')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('⇢')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });

  test('displays a custom label', () => {
    render(<LabelFromToTokenTypography {...defaultProps} label="Custom Label" />);
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });

  test('displays the correct "from" value', () => {
    render(<LabelFromToTokenTypography {...defaultProps} fromValue="50" />);
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  test('applies the correct color token to the "from" value', () => {
    render(<LabelFromToTokenTypography {...defaultProps} fromColorToken="wildStrawberry" />);
    const fromTokenTypography = screen.getByTestId(
      'LabelFromToTokenTypography-FromToBox-FromTokenTypography-wildStrawberry-primaryBodyXSmallBold',
    );
    expect(fromTokenTypography).toBeInTheDocument();
  });
});
