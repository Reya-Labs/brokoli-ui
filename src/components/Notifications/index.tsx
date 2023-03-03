// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css';

import styled from '@emotion/styled';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { BaseColorTokens } from '../../foundation/Colors';
import { CloseButton } from '../CloseButton';
import { Typography, TypographyToken } from '../Typography';
import { NotificationBox, TitleBox } from './Notifications.styled';

export type ShowNotificationParams = {
  content: string;
  title: string;
  colorToken: BaseColorTokens;
  titleTypographyToken?: TypographyToken;
  contentTypographyToken?: TypographyToken;
  autoClose?: number | false;
};

export const showNotification = ({
  titleTypographyToken = 'primaryBodyMediumRegular',
  contentTypographyToken = 'primaryBodySmallRegular',
  content,
  title,
  colorToken,
  autoClose = false,
}: ShowNotificationParams) => {
  toast(
    ({ closeToast }) => {
      return (
        <NotificationBox colorToken={colorToken}>
          <TitleBox>
            <Typography colorToken={colorToken} typographyToken={titleTypographyToken}>
              {title}
            </Typography>
            <CloseButton colorToken={colorToken} onClick={closeToast} />
          </TitleBox>
          <Typography colorToken={`${colorToken}2`} typographyToken={contentTypographyToken}>
            {content}
          </Typography>
        </NotificationBox>
      );
    },
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
