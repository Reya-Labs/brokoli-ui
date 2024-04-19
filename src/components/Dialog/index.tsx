import React, { useCallback } from 'react';

import { DialogBox } from './Dialog.styled';
import { FloatingUIDialog, FloatingUIDialogContent } from './FloatingUIDialog';

type DialogProps = React.PropsWithChildren<{
  onClose?: () => void;
  open: boolean;
}>;

export const Dialog: React.FunctionComponent<DialogProps> = ({ open, onClose, children }) => {
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (newOpen) {
        return;
      }

      typeof onClose === 'function' && onClose();
    },
    [onClose],
  );

  if (!children) {
    return null;
  }

  return (
    <FloatingUIDialog open={open} onOpenChange={handleOpenChange}>
      <FloatingUIDialogContent>
        <DialogBox>{children}</DialogBox>
      </FloatingUIDialogContent>
    </FloatingUIDialog>
  );
};
