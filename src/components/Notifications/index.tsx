// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css';

import styled from '@emotion/styled';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

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
  titleTypographyToken = 'bodyMediumRegular',
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
  toast(({ closeToast }) => <Component />, {
    autoClose,
    closeButton: false,
  });
};

export const Notifications = styled(ToastContainer)`
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__toast {
    padding: 0;
    min-height: auto;
    border-radius: 8px;
    background: transparent;
  }
`;
