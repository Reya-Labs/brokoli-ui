import styled from '@emotion/styled';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Typography } from '../Typography';
import { Notifications, showCustomNotification, showNotification } from '.';

export default {
  args: {},
  component: Notifications,
  title: 'Components/Notifications',
} as Meta<typeof Notifications>;

const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NotificationContentBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.colors.black700};
  padding: 8px;
`;

const Template: StoryFn<typeof Notifications> = (args) => {
  return (
    <ButtonBox>
      <Notifications {...args} />
      <Button
        borderColorToken="white800"
        hoverBorderColorToken="white500"
        typographyColorToken="white100"
        onClick={() => {
          showNotification({
            colorToken: 'error',
            content:
              'A error message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a error',
          });
        }}
      >
        Show error
      </Button>
      <Button
        borderColorToken="white800"
        hoverBorderColorToken="white500"
        typographyColorToken="white100"
        onClick={() => {
          showNotification({
            colorToken: 'warning',
            content:
              'A warning message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a warning',
          });
        }}
      >
        Show warning
      </Button>
      <Button
        borderColorToken="white800"
        hoverBorderColorToken="white500"
        typographyColorToken="white100"
        onClick={() => {
          showNotification({
            colorToken: 'primary',
            content:
              'A success message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a success',
          });
        }}
      >
        Show success
      </Button>
      <Button
        borderColorToken="white800"
        hoverBorderColorToken="white500"
        typographyColorToken="white100"
        onClick={() => {
          showCustomNotification({
            Component: () => (
              <NotificationContentBox>
                <Typography colorToken="white950" typographyToken="bodyMediumMedium">
                  Custom notification
                </Typography>
                <Button
                  backgroundColorToken="black700"
                  borderColorToken="white800"
                  hoverBorderColorToken="white500"
                  typographyColorToken="white100"
                >
                  Button can fit!
                </Button>
              </NotificationContentBox>
            ),
          });
        }}
      >
        Show Custom Notification
      </Button>
      <Button
        borderColorToken="white800"
        hoverBorderColorToken="white500"
        typographyColorToken="white100"
        onClick={() => {
          showNotification({
            autoClose: 3000,
            colorToken: 'white',
            content:
              'A info message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a info',
          });
        }}
      >
        Show info that auto closes in 3 seconds
      </Button>
    </ButtonBox>
  );
};

export const Default: StoryObj<typeof Notifications> = {
  args: {},
  render: Template,
};
