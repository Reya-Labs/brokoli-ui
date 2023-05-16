import { render, screen } from '@testing-library/react';
import React from 'react';

import { LabelTokenTypography, LabelTokenTypographyProps } from '.';

describe('<LabelTokenTypography />', () => {
  const defaultProps: LabelTokenTypographyProps = {
    label: 'Label',
    labelTypographyToken: 'primaryBodyMediumBold',
    labelColorToken: 'lavenderWeb2',
    token: 'Token',
    typographyToken: 'primaryBodyMediumRegular',
    value: '100',
    colorToken: 'lavenderWeb',
  };

  it('renders correctly with default props', () => {
    render(<LabelTokenTypography {...defaultProps} />);
    expect(screen.getByTestId('LabelTokenTypography-LabelTokenTypographyBox')).toBeInTheDocument();
    expect(screen.getByTestId('LabelTokenTypography-TooltipLabel')).toBeInTheDocument();
    expect(screen.getByTestId('LabelTokenTypography-TokenTypography')).toBeInTheDocument();
  });

  it('displays the correct label', () => {
    render(<LabelTokenTypography {...defaultProps} label="Custom Label" />);
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });

  it('displays the correct token value', () => {
    render(<LabelTokenTypography {...defaultProps} value="200" />);
    expect(screen.getByText('200')).toBeInTheDocument();
  });
});
