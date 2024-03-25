import { useEffect } from 'react';

type UseTabVisibilityParams = {
  onVisible?: () => void;
  onHidden?: () => void;
};

/**
 * Custom hook that triggers actions based on the visibility of the browser tab.
 * @param actions - An optional object containing the actions to be performed when the tab becomes visible or hidden.
 */
export const useTabVisibility = ({ onVisible, onHidden }: UseTabVisibilityParams = {}): void => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        onVisible?.();
      } else if (document.visibilityState === 'hidden') {
        onHidden?.();
      }
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onVisible, onHidden]); // Re-run the effect if onVisible or onHidden changes
};
