import React, { useEffect, useState } from 'react';

import { DialogBox } from './Dialog.styled';
import { FloatingUIDialog, FloatingUIDialogContent } from './FloatingUIDialog';

type DialogProps = React.PropsWithChildren<{
  open: boolean;
  onClose: () => void;
}>;

export const Dialog: React.FunctionComponent<DialogProps> = ({ open, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (isOpen !== open) {
      setIsOpen(open);
    }
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      onClose();
    }

    setIsOpen(newOpen);
  };

  if (!children) {
    return null;
  }

  return (
    <FloatingUIDialog open={isOpen} onOpenChange={handleOpenChange}>
      <FloatingUIDialogContent>
        <DialogBox>{children}</DialogBox>
      </FloatingUIDialogContent>
    </FloatingUIDialog>
  );
};
