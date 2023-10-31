import React from 'react';

import { fireEvent, render, screen } from '../../../test-utils';
import { NotificationContent, NotificationContentProps } from '.';

describe('<NotificationContent />', () => {
  const defaultProps: NotificationContentProps = {
    closeToast: jest.fn(),
    colorToken: 'error100',
    content: 'Notification Content',
    contentTypographyToken: 'primaryHeader2Black',
    onCloseNotification: jest.fn(),
    title: 'Notification Title',
    titleTypographyToken: 'primaryBodyMediumBold',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<NotificationContent {...defaultProps} />);
    expect(screen.getByTestId('NotificationContent-NotificationBox')).toBeInTheDocument();
    expect(screen.getByTestId('NotificationContent-TitleBox')).toBeInTheDocument();
    expect(screen.getByText('Notification Title')).toBeInTheDocument();
    expect(screen.getByTestId('CloseButton-CloseButtonStyled-error100')).toBeInTheDocument();
    expect(screen.getByText('Notification Content')).toBeInTheDocument();
  });

  it('calls onCloseNotification and closeToast callbacks when close button is clicked', () => {
    const onCloseNotification = jest.fn();
    const closeToast = jest.fn();
    render(
      <NotificationContent
        {...defaultProps}
        closeToast={closeToast}
        onCloseNotification={onCloseNotification}
      />,
    );
    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-error100');
    fireEvent.click(closeButton);
    expect(closeToast).toHaveBeenCalled();
    expect(onCloseNotification).toHaveBeenCalled();
  });
});
