import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { WalletConnectButton } from './index';

describe('<WalletConnectButton />', () => {
  test('renders error message when error prop is passed', () => {
    const error = 'Error connecting to wallet';
    render(<WalletConnectButton error={error} />);
    const buttonBox = screen.getByTestId('WalletConnectButton-WalletError');
    expect(buttonBox).toHaveTextContent(error);
  });

  test('renders connected wallet when account prop is passed', () => {
    const account = '0xb01F14d1C9000D453241221EB54648F1C378c970';
    render(<WalletConnectButton account={account} />);
    const buttonBox = screen.getByTestId('WalletConnectButton-WalletConnected');
    const avatarAddress = screen.getByTestId('AvatarAddress');
    expect(avatarAddress).toBeInTheDocument();
    expect(buttonBox).toBeInTheDocument();
  });

  test('renders connect wallet message when account prop is passed but address is not correct format', () => {
    const account = '0x1234567890abcdef';
    render(<WalletConnectButton account={account} />);
    const buttonBox = screen.getByTestId('WalletConnectButton-WalletConnect');
    expect(buttonBox).toHaveTextContent('Connect wallet');
  });

  test('renders connect wallet message when no account or error prop is passed', () => {
    render(<WalletConnectButton />);
    const buttonBox = screen.getByTestId('WalletConnectButton-WalletConnect');
    expect(buttonBox).toHaveTextContent('Connect wallet');
  });

  test('calls onClick prop when button is clicked', () => {
    const onClick = jest.fn();
    render(<WalletConnectButton onClick={onClick} />);
    const button = screen.getByTestId('WalletConnectButton-WalletConnect');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
