import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { ChainOptions, ChainOptionsProps } from './ChainOptions';

describe('<ChainOptions />', () => {
  const chainOptions: ChainOptionsProps['chainOptions'] = [
    {
      id: 1,
      name: 'Option 1',
      Icon: () => <span>Icon 1</span>,
      isActive: false,
    },
    {
      id: 2,
      name: 'Option 2',
      Icon: () => <span>Icon 2</span>,
      isActive: true,
    },
  ];

  const onClickMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders chain options correctly', () => {
    render(<ChainOptions chainOptions={chainOptions} onClick={onClickMock} />);
    const chainOptionsButtonGroup = screen.getByTestId('ChainOptions-ChainOptionsButtonGroup');
    expect(chainOptionsButtonGroup).toBeInTheDocument();
    expect(chainOptionsButtonGroup.children.length).toBe(chainOptions.length);
  });

  it('calls the onClick callback when a chain option is clicked', () => {
    render(<ChainOptions chainOptions={chainOptions} onClick={onClickMock} />);
    const chainOptionButton = screen.getAllByTestId(/(ChainOptionButton|ActiveChainOptionButton)/);
    fireEvent.click(chainOptionButton[0]);
    expect(onClickMock).toHaveBeenCalledWith(chainOptions[0].id);
  });

  it('call the onClick callback when an active chain option is clicked', () => {
    render(<ChainOptions chainOptions={chainOptions} onClick={onClickMock} />);
    const chainOptionButton = screen.getAllByTestId(/(ChainOptionButton|ActiveChainOptionButton)/);
    fireEvent.click(chainOptionButton[1]);
    expect(onClickMock).toHaveBeenCalled();
  });
});
