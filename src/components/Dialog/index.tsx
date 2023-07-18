import React from 'react';

import { DialogBox } from './Dialog.styled';
import { FloatingUIDialog, FloatingUIDialogContent } from './FloatingUIDialog';

export const Dialog: React.FunctionComponent<{
  open: boolean;
}> = ({ open, children }) => {
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
