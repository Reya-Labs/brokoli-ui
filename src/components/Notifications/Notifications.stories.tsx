import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Notifications, showNotification } from './index';

export default {
  args: {},
  component: Notifications,
  title: 'Components/Notifications',
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => {
  return (
    <React.Fragment>
      <Notifications {...args} />
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            colorToken: 'wildStrawberry',
            content:
              'A error message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a error',
          });
        }}
      >
        Show error
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            colorToken: 'orangeYellow',
            content:
              'A warning message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a warning',
          });
        }}
      >
        Show warning
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            colorToken: 'skyBlueCrayola',
            content:
              'A success message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a success',
          });
        }}
      >
        Show success
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            autoClose: 3000,
            colorToken: 'lavenderWeb',
            content:
              'A info message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            title: 'This is a info',
          });
        }}
      >
        Show info that auto closes in 3 seconds
      </Button>
    </React.Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {};
