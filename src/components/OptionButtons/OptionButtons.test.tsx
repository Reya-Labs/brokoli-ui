import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { OptionButtons, OptionsProps } from '.';

describe('<OptionButtons />', () => {
  const mockOnOptionClick = jest.fn();
  const props: OptionsProps = {
    activeOptionId: '1',
    label: 'Test Label',
    labelColorToken: 'white950',
    labelTypographyToken: 'bodySmallMedium',
    onOptionClick: mockOnOptionClick,
    options: [
      {
        activeBackgroundColorToken: 'primary950',
        activeBorderColorToken: 'primary800',
        activeHoverBorderColorToken: 'primary500',
        activeTypographyColorToken: 'primary500',
        backgroundColorToken: 'black900',
        borderColorToken: 'black900',
        hoverBorderColorToken: 'black900',
        id: 'yes',
        label: 'Yes',
        typographyColorToken: 'primary500',
      },
      {
        activeBackgroundColorToken: 'error950',
        activeBorderColorToken: 'error800',
        activeHoverBorderColorToken: 'error500',
        activeTypographyColorToken: 'error500',
        backgroundColorToken: 'black900',
        borderColorToken: 'black900',
        hoverBorderColorToken: 'black900',
        id: 'no',
        label: 'No',
        typographyColorToken: 'error500',
      },
    ],
    typographyToken: 'bodyMediumMedium',
  };

  it('renders without crashing', () => {
    render(<OptionButtons {...props} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });

  it('correctly styles the active option and inactive option', () => {
    render(<OptionButtons {...props} activeOptionId="yes" />);
    const activeOption = screen.getByTestId('OptionButtons-OptionButton-yes');
    const inActiveOption = screen.getByTestId('OptionButtons-OptionButton-no');
    expect(activeOption).toHaveStyle(`background: rgb(9, 27, 30)`);
    expect(inActiveOption).toHaveStyle(`background: rgb(11, 9, 17)`);
  });

  it('calls onOptionClick with the right id when an option is clicked', () => {
    render(<OptionButtons {...props} />);
    const optionButton = screen.getByText('Yes');
    fireEvent.click(optionButton);
    expect(mockOnOptionClick).toHaveBeenCalledWith('yes');
  });
});
