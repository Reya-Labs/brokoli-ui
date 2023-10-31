import { isBaseColorToken } from './isBaseColorToken';

describe('isBaseColorToken', () => {
  it('should return true for valid base color tokens', () => {
    expect(isBaseColorToken('liberty')).toBe(true);
    expect(isBaseColorToken('white100')).toBe(true);
    expect(isBaseColorToken('primary100')).toBe(true);
    expect(isBaseColorToken('warning100')).toBe(true);
    expect(isBaseColorToken('wildStrawberry')).toBe(true);
    expect(isBaseColorToken('secondary100')).toBe(true);
  });

  it('should return false for invalid tokens', () => {
    expect(isBaseColorToken('')).toBe(false);
    expect(isBaseColorToken('not-a-color-token')).toBe(false);
    expect(isBaseColorToken('some-other-token')).toBe(false);
  });
});
