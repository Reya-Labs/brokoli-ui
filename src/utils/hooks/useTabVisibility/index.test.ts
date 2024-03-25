import { renderHook } from '@testing-library/react-hooks';

import { useTabVisibility } from '.'; // Adjust the import path to match your file structure

describe('useTabVisibility', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: true });
  });

  test('calls onVisible when the tab becomes visible', () => {
    const onVisible = jest.fn();
    renderHook(() => useTabVisibility({ onVisible }));

    // Simulate the tab becoming visible
    document.visibilityState = 'visible';
    document.dispatchEvent(new Event('visibilitychange'));

    expect(onVisible).toHaveBeenCalled();
  });

  test('calls onHidden when the tab becomes hidden', () => {
    const onHidden = jest.fn();
    renderHook(() => useTabVisibility({ onHidden }));

    // Simulate the tab becoming hidden
    document.visibilityState = 'hidden';
    document.dispatchEvent(new Event('visibilitychange'));

    expect(onHidden).toHaveBeenCalled();
  });

  test('does not call onVisible when the tab is hidden', () => {
    const onVisible = jest.fn();
    renderHook(() => useTabVisibility({ onVisible }));

    // Ensure the visibility state is hidden
    document.visibilityState = 'hidden';
    document.dispatchEvent(new Event('visibilitychange'));

    expect(onVisible).not.toHaveBeenCalled();
  });

  test('does not call onHidden when the tab is visible', () => {
    const onHidden = jest.fn();
    renderHook(() => useTabVisibility({ onHidden }));

    // Ensure the visibility state is visible
    document.visibilityState = 'visible';
    document.dispatchEvent(new Event('visibilitychange'));

    expect(onHidden).not.toHaveBeenCalled();
  });
});
