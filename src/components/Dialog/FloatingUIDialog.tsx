import {
  FloatingFocusManager,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { FloatingOverlayStyled } from './FloatingUIDialog.styled';

type FloatingUIDialogOptions = {
  initialOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

function useFloatingUIDialog({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: FloatingUIDialogOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    onOpenChange: setOpen,
    open,
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      descriptionId,
      labelId,
      setDescriptionId,
      setLabelId,
    }),
    [open, setOpen, interactions, data, labelId, descriptionId],
  );
}

type ContextType =
  | (ReturnType<typeof useFloatingUIDialog> & {
      setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
    })
  | null;

const DialogContext = React.createContext<ContextType>(null);

const useFloatingUIDialogContext = () => {
  const context = React.useContext(DialogContext);

  if (context == null) {
    throw new Error('Dialog components must be wrapped in <FloatingUIDialog />');
  }

  return context;
};

export function FloatingUIDialog({
  children,
  ...options
}: {
  children: React.ReactNode;
} & FloatingUIDialogOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const dialog = useFloatingUIDialog(options);
  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>;
}

export const FloatingUIDialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function FloatingUIDialogContent(props, propRef) {
  const { context: floatingContext, ...context } = useFloatingUIDialogContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      {context.open && (
        <FloatingOverlayStyled
          lockScroll={true}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-describedby={context.descriptionId}
              aria-labelledby={context.labelId}
              {...context.getFloatingProps(props)}
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlayStyled>
      )}
    </FloatingPortal>
  );
});
