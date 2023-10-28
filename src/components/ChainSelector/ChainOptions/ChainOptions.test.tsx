import React from 'react';

import { fireEvent, render, screen } from '../../../test-utils';
import { ChainOptions, ChainOptionsProps } from './ChainOptions';

describe('<ChainOptions />', () => {
  const chainOptions: ChainOptionsProps['chainOptions'] = [
    {
      Icon: () => <span>Icon 1</span>,
      id: 1,
      isActive: false,
      name: 'Option 1',
    },
    {
      Icon: () => <span>Icon 2</span>,
      id: 2,
      isActive: true,
      name: 'Option 2',
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
