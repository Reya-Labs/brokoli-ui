// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css';

import { css, Global } from '@emotion/react';
import React from 'react';
import { createPortal } from 'react-dom';
import { toast, ToastContainer, ToastContainerProps } from 'react-toastify';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { NotificationContent } from './NotificationContent';

export type ShowNotificationParams = {
  content: string;
  title: string;
  colorToken: BaseColorTokens;
  titleTypographyToken?: TypographyTokens;
  contentTypographyToken?: TypographyTokens;
  autoClose?: number | false;
  onCloseNotification?: () => void;
  Component?: React.FunctionComponent;
};

export type ShowCustomNotificationParams = {
  autoClose?: number | false;
  Component: React.FunctionComponent;
};

export const showNotification = ({
  titleTypographyToken = 'bodyMediumMedium',
  contentTypographyToken = 'bodySmallMedium',
  content,
  title,
  colorToken,
  autoClose = false,
  onCloseNotification,
}: ShowNotificationParams) => {
  toast(
    ({ closeToast }) => (
      <NotificationContent
        closeToast={closeToast}
        colorToken={colorToken}
        content={content}
        contentTypographyToken={contentTypographyToken}
        title={title}
        titleTypographyToken={titleTypographyToken}
        onCloseNotification={onCloseNotification}
      />
    ),
    {
      autoClose,
      closeButton: false,
    },
  );
};

export const showCustomNotification = ({
  autoClose = false,
  Component,
}: ShowCustomNotificationParams) => {
  toast(() => <Component />, {
    autoClose,
    closeButton: false,
  });
};

const globalToastStyle = css`
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__toast {
    padding: 0;
    min-height: auto;
    background: transparent;
    border-radius: 4px;
  }
`;

export const Notifications: React.FC<ToastContainerProps> = (props) => {
  return createPortal(
    <>
      <Global styles={globalToastStyle} />
      <ToastContainer {...props} />
    </>,
    document.body,
  );
};
