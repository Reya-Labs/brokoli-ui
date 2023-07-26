import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { ChainOption, ChainSelector, ChainSelectorProps } from '.';

describe('<ChainSelector />', () => {
  const chainOptions: ChainOption[] = [
    { Icon: (props) => <div {...props}>Chain 1 Icon</div>, id: 1, name: 'Chain 1' },
    { Icon: (props) => <div {...props}>Chain 2 Icon</div>, id: 2, name: 'Chain 2' },
    { Icon: (props) => <div {...props}>Chain 3 Icon</div>, id: 3, name: 'Chain 3' },
  ];

  const onChainChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderChainSelector = (props?: Partial<ChainSelectorProps>) => {
    const defaultProps: ChainSelectorProps = {
      approving: false,
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

    const selectedChainIcon = screen.getByTestId('ChainSelector-Chain 1');

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
