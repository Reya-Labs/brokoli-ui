import React from 'react';

import { render, screen } from '../../test-utils';
import { LabelTokenTypography, LabelTokenTypographyProps } from '.';

describe('<LabelTokenTypography />', () => {
  const defaultProps: LabelTokenTypographyProps = {
    colorToken: 'white100',
    label: 'Label',
    labelColorToken: 'white300',
    labelTypographyToken: 'bodyMediumBold',
    token: 'Token',
    typographyToken: 'bodyMediumMedium',
    value: '100',
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
