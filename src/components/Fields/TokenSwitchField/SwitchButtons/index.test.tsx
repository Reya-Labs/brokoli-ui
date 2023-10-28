import React from 'react';

import { fireEvent, render, screen } from '../../../../test-utils';
import { SwitchButtons } from './index';

describe('<SwitchButtons />', () => {
  const onSwitchChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders switch buttons correctly', () => {
    render(
      <SwitchButtons
        switchOffText="Off"
        switchOffValue="off"
        switchOnText="On"
        switchOnValue="on"
        switchValue="on"
        onSwitchChange={onSwitchChangeMock}
      />,
    );

    const switchButtonOn = screen.getByTestId('SwitchButtons-SwitchButtonOn');
    const switchButtonOff = screen.getByTestId('SwitchButtons-SwitchButtonOff');

    expect(switchButtonOn).toBeInTheDocument();
    expect(switchButtonOff).toBeInTheDocument();
  });

  test('triggers onSwitchChange when switch button is clicked', () => {
    render(
      <SwitchButtons
        switchOffText="Off"
        switchOffValue="off"
        switchOnText="On"
        switchOnValue="on"
        switchValue="off"
        onSwitchChange={onSwitchChangeMock}
      />,
    );

    const switchButtonOn = screen.getByTestId('SwitchButtons-SwitchButtonOn');
    fireEvent.click(switchButtonOn);

    expect(onSwitchChangeMock).toHaveBeenCalledTimes(1);
    expect(onSwitchChangeMock).toHaveBeenCalledWith('on');
  });

  test('does not trigger onSwitchChange if the switch value is already active', () => {
    render(
      <SwitchButtons
        switchOffText="Off"
        switchOffValue="off"
        switchOnText="On"
        switchOnValue="on"
        switchValue="on"
        onSwitchChange={onSwitchChangeMock}
      />,
    );

    const switchButtonOn = screen.getByTestId('SwitchButtons-SwitchButtonOn');
    fireEvent.click(switchButtonOn);

    expect(onSwitchChangeMock).not.toHaveBeenCalled();
  });
});
