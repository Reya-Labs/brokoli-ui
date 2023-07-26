import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { NotificationContent, NotificationContentProps } from '.';

describe('<NotificationContent />', () => {
  const defaultProps: NotificationContentProps = {
    closeToast: jest.fn(),
    colorToken: 'wildStrawberry',
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
    expect(screen.getByTestId('CloseButton-CloseButtonStyled-wildStrawberry')).toBeInTheDocument();
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
    const closeButton = screen.getByTestId('CloseButton-CloseButtonStyled-wildStrawberry');
    fireEvent.click(closeButton);
    expect(closeToast).toHaveBeenCalled();
    expect(onCloseNotification).toHaveBeenCalled();
  });
});
