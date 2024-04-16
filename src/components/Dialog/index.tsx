import React, { useEffect, useState } from 'react';

import { DialogBox } from './Dialog.styled';
import { FloatingUIDialog, FloatingUIDialogContent } from './FloatingUIDialog';

type DialogProps = React.PropsWithChildren<{
  open: boolean;
}>;

export const Dialog: React.FunctionComponent<DialogProps> = ({ open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (isOpen !== open) {
      setIsOpen(open);
    }
  }, [open]);

  if (!children) {
    return null;
  }

  return (
    <FloatingUIDialog open={isOpen} onOpenChange={setIsOpen}>
      <FloatingUIDialogContent>
        <DialogBox>{children}</DialogBox>
      </FloatingUIDialogContent>
    </FloatingUIDialog>
  );
};
