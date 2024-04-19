import { Global, useTheme } from '@emotion/react';
import React from 'react';
import { Popover as TinyPopover, PopoverProps as TinyPopoverProps } from 'react-tiny-popover';

import {
  globalReactTinyPopoverContainerCSS,
  TINY_POPOVER_CONTAINER_CLASS_NAME,
} from './Popover.styled';

type PopoverProps = {
  align?: TinyPopoverProps['align'];
  children: TinyPopoverProps['children'];
  containerClassName?: TinyPopoverProps['containerClassName'];
  content: TinyPopoverProps['content'];
  'data-testid'?: string;
  isOpen: TinyPopoverProps['isOpen'];
  onClickOutside: TinyPopoverProps['onClickOutside'];
};

export const Popover: React.FunctionComponent<PopoverProps> = ({
  children,
  content,
  isOpen,
  onClickOutside,
  'data-testid': dataTestId,
  align,
  containerClassName,
}) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      {containerClassName ? null : <Global styles={globalReactTinyPopoverContainerCSS(theme)} />}
      <TinyPopover
        align={align || 'start'}
        containerClassName={containerClassName || TINY_POPOVER_CONTAINER_CLASS_NAME}
        content={content}
        data-testid={dataTestId}
        isOpen={isOpen}
        positions={['bottom']}
        onClickOutside={onClickOutside}
      >
        {children}
      </TinyPopover>
    </React.Fragment>
  );
};
