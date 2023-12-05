import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { render, screen } from '../../test-utils';
import { TooltipLabel } from '.';

describe('<TooltipLabel />', () => {
  test('renders TooltipWithTypography when both tooltip and label are provided', () => {
    const tooltip = 'This is a tooltip';
    const label = 'Label text';
    const labelColorToken: ColorTokens = 'white100';
    const tooltipColorToken: ColorTokens = 'error100';
    const labelTypographyToken: TypographyToken = 'bodyMediumBold';

    render(
      <TooltipLabel
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />,
    );

    const tooltipWithTypography = screen.getByTestId('TooltipLabel-TypographyWithTooltip');

    expect(tooltipWithTypography).toBeInTheDocument();
    // Add additional assertions for the rendered tooltip and label components
  });

  test('renders Typography when only label is provided', () => {
    const label = 'Label text';
    const labelColorToken: ColorTokens = 'white100';
    const labelTypographyToken: TypographyToken = 'bodyMediumBold';

    render(
      <TooltipLabel
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
      />,
    );

    const typography = screen.getByTestId('TooltipLabel-Typography');

    expect(typography).toBeInTheDocument();
    // Add additional assertions for the rendered label component
  });

  test('renders null when neither tooltip nor label is provided', () => {
    render(<TooltipLabel label={null} tooltip={null} />);

    expect(screen.queryByTestId('TooltipLabel-TypographyWithTooltip')).toBeNull();
    expect(screen.queryByTestId('TooltipLabel-Typography')).toBeNull();
  });
});
