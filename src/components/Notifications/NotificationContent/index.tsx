import React from 'react';

import { BaseColorTokens } from '../../../foundation/Colors';
import { TypographyTokens } from '../../../foundation/Typography';
import { CloseButton } from '../../CloseButton';
import { Typography } from '../../Typography';
import { NotificationBox, TitleBox } from '../Notifications.styled';

export type NotificationContentProps = {
  content: string;
  title: string;
  colorToken: BaseColorTokens;
  titleTypographyToken: TypographyTokens;
  contentTypographyToken: TypographyTokens;
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
          buttonBackgroundColorToken={`${colorToken}950`}
          buttonHoverBackgroundColorToken={`${colorToken}900`}
          iconColorToken={`${colorToken}500`}
          iconHoverColorToken={`${colorToken}700`}
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
