import { renderHook } from '@testing-library/react-hooks';

import { useTabVisibility } from '.';
import { getVisibilityState } from './helpers';

jest.mock('./helpers', () => ({
  getVisibilityState: jest.fn(),
}));

describe('useTabVisibility', () => {
  it('calls onVisible when the tab becomes visible', () => {
    (getVisibilityState as jest.Mock).mockReturnValue('visible');
    const onVisible = jest.fn();
    renderHook(() => useTabVisibility({ onVisible }));

    document.dispatchEvent(new Event('visibilitychange'));

    expect(onVisible).toHaveBeenCalled();
  });

  it('calls onHidden when the tab becomes hidden', () => {
    (getVisibilityState as jest.Mock).mockReturnValue('hidden');
    const onHidden = jest.fn();
    renderHook(() => useTabVisibility({ onHidden }));

    document.dispatchEvent(new Event('visibilitychange'));

    expect(onHidden).toHaveBeenCalled();
  });

  it('does not call onVisible when the tab is hidden', () => {
    (getVisibilityState as jest.Mock).mockReturnValue('hidden');
    const onVisible = jest.fn();
    renderHook(() => useTabVisibility({ onVisible }));

    document.dispatchEvent(new Event('visibilitychange'));

    expect(onVisible).not.toHaveBeenCalled();
  });

  it('does not call onHidden when the tab is visible', () => {
    (getVisibilityState as jest.Mock).mockReturnValue('visible');
    const onHidden = jest.fn();
    renderHook(() => useTabVisibility({ onHidden }));

    document.dispatchEvent(new Event('visibilitychange'));

    expect(onHidden).not.toHaveBeenCalled();
  });
});
