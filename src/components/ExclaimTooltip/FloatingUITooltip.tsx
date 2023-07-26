import type { Placement } from '@floating-ui/react';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { LAYER_INDEXES } from '../../foundation/LayerIndexes';

type FloatingUITooltipOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function useFloatingUITooltip({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: FloatingUITooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
      }),
      shift({ padding: 5 }),
    ],
    onOpenChange: setOpen,
    open,
    placement,
    whileElementsMounted: autoUpdate,
  });

  const context = data.context;

  const hover = useHover(context, {
    enabled: controlledOpen == null,
    move: false,
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
}

type ContextType = ReturnType<typeof useFloatingUITooltip> | null;

const FloatingUITooltipContext = React.createContext<ContextType>(null);

const useFloatingUITooltipContext = () => {
  const context = React.useContext(FloatingUITooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <FloatingUITooltip />');
  }

  return context;
};

export function FloatingUITooltip({
  children,
  ...options
}: { children: React.ReactNode } & FloatingUITooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useFloatingUITooltip(options);
  return (
    <FloatingUITooltipContext.Provider value={tooltip}>
      {children}
    </FloatingUITooltipContext.Provider>
  );
}

export const FloatingUITooltipTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>(
  function FloatingUITooltipTrigger({ children, ...props }, propRef) {
    const context = useFloatingUITooltipContext();
    const childrenRef = (children as { ref: React.Ref<unknown> }).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        } as never),
      );
    }

    return null;
  },
);

export const FloatingUITooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function FloatingUITooltipContent(props, propRef) {
  const context = useFloatingUITooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      {context.open && (
        <div
          ref={ref}
          style={{
            left: context.x ?? 0,
            position: context.strategy,
            top: context.y ?? 0,
            visibility: context.x == null ? 'hidden' : 'visible',
            zIndex: LAYER_INDEXES.TOOLTIP,
            ...props.style,
          }}
          {...context.getFloatingProps(props)}
        />
      )}
    </FloatingPortal>
  );
});
