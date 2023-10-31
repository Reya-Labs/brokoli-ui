import React from 'react';

import { BaseColorTokens } from '../../../foundation/Colors';
import { TypographyToken } from '../../../foundation/Typography';
import { CloseButton } from '../../CloseButton';
import { Typography } from '../../Typography';
import { NotificationBox, TitleBox } from '../Notifications.styled';

export type NotificationContentProps = {
  content: string;
  title: string;
  colorToken: BaseColorTokens;
  titleTypographyToken: TypographyToken;
  contentTypographyToken: TypographyToken;
  onCloseNotification?: () => void;
  closeToast?: () => void;
};

export const NotificationContent: React.FunctionComponent<NotificationContentProps> = ({
  onCloseNotification,
  title,
  colorToken,
  closeToast,
  contentTypographyToken,
  titleTypographyToken,
  content,
}) => {
  return (
    <NotificationBox colorToken={colorToken} data-testid="NotificationContent-NotificationBox">
      <TitleBox data-testid="NotificationContent-TitleBox">
        <Typography colorToken={`${colorToken}100`} typographyToken={titleTypographyToken}>
          {title}
        </Typography>
        <CloseButton
          colorToken={colorToken}
          onClick={() => {
            closeToast && closeToast();
            onCloseNotification && onCloseNotification();
          }}
        />
      </TitleBox>
      <Typography colorToken={`${colorToken}300`} typographyToken={contentTypographyToken}>
        {content}
      </Typography>
    </NotificationBox>
  );
};
