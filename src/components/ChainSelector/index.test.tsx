import React from 'react';

import { fireEvent, render, screen } from '../../test-utils';
import { ChainOption, ChainSelector, ChainSelectorProps } from '.';

describe('<ChainSelector />', () => {
  const chainOptions: ChainOption[] = [1, 2, 3];

  const onChainChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderChainSelector = (props?: Partial<ChainSelectorProps>) => {
    const defaultProps: ChainSelectorProps = {
      chainOptions,
      onChainChange: onChainChangeMock,
      selectedChainId: 1,
    };

    return render(<ChainSelector {...defaultProps} {...props} />);
  };

  test('renders chain selector correctly', () => {
    renderChainSelector();

    const selectorBox = screen.getByTestId('ChainSelector-SelectorBox');
    const chainSelectorButton = screen.getByTestId('ChainSelectorButton');

    expect(selectorBox).toBeInTheDocument();
    expect(chainSelectorButton).toBeInTheDocument();
  });

  test('renders the selected chain icon', () => {
    renderChainSelector();

    const selectedChainIcon = screen.getByTestId('ChainSelector-Ethereum');

    expect(selectedChainIcon).toBeInTheDocument();
  });

  test('triggers onChainChange when a chain option is selected', () => {
    renderChainSelector();

    const openChainSelectorButton = screen.getByTestId('ChainSelectorButton');
    fireEvent.click(openChainSelectorButton);

    const chainOption = screen.getAllByTestId('ChainOptionButton')[0];
    fireEvent.click(chainOption);

    expect(onChainChangeMock).toHaveBeenCalledTimes(1);
    expect(onChainChangeMock).toHaveBeenCalledWith(2);
  });
});
