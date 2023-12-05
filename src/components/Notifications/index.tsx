// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css';

import styled from '@emotion/styled';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { NotificationContent } from './NotificationContent';

export type ShowNotificationParams = {
  content: string;
  title: string;
  colorToken: BaseColorTokens;
  titleTypographyToken?: TypographyToken;
  contentTypographyToken?: TypographyToken;
  autoClose?: number | false;
  onCloseNotification?: () => void;
};

export const showNotification = ({
  titleTypographyToken = 'bodyMediumRegular',
  contentTypographyToken = 'bodySmallRegular',
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

export const Notifications = styled(ToastContainer)`
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__toast {
    padding: 0;
    min-height: auto;
  }
`;
