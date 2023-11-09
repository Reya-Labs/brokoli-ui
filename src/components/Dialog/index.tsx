import React from 'react';

import { DialogBox } from './Dialog.styled';
import { FloatingUIDialog, FloatingUIDialogContent } from './FloatingUIDialog';

type DialogProps = React.PropsWithChildren<{
  open: boolean;
}>;

export const Dialog: React.FunctionComponent<DialogProps> = ({ open, children }) => {
  if (!children) {
    return null;
  }
  return (
    <FloatingUIDialog open={open}>
      <FloatingUIDialogContent>
        <DialogBox>{children}</DialogBox>
      </FloatingUIDialogContent>
    </FloatingUIDialog>
  );
};
