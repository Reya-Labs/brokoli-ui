import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { Notifications, showNotification } from './index';

export default {
  title: 'Components/Notifications',
  component: Notifications,
  args: {},
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => {
  return (
    <React.Fragment>
      <Notifications {...args} />
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            title: 'This is a error',
            content:
              'A error message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            colorToken: 'wildStrawberry',
          });
        }}
      >
        Show error
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            title: 'This is a warning',
            content:
              'A warning message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            colorToken: 'orangeYellow',
          });
        }}
      >
        Show warning
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            title: 'This is a success',
            content:
              'A success message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            colorToken: 'skyBlueCrayola',
          });
        }}
      >
        Show success
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          showNotification({
            title: 'This is a info',
            content:
              'A info message is a modal dialog box, in-place message, notification, or balloon that alerts the user of a condition that might cause a problem in the future',
            colorToken: 'lavenderWeb',
            autoClose: 3000,
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
