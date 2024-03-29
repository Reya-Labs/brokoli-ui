import { isBaseColorToken } from './isBaseColorToken';

describe('isBaseColorToken', () => {
  it('should return true for valid base color tokens', () => {
    expect(isBaseColorToken('black')).toBe(true);
    expect(isBaseColorToken('white')).toBe(true);
    expect(isBaseColorToken('primary')).toBe(true);
    expect(isBaseColorToken('warning')).toBe(true);
    expect(isBaseColorToken('error')).toBe(true);
    expect(isBaseColorToken('secondary')).toBe(true);
  });

  it('should return false for invalid tokens', () => {
    expect(isBaseColorToken('')).toBe(false);
    expect(isBaseColorToken('not-a-color-token')).toBe(false);
    expect(isBaseColorToken('some-other-token')).toBe(false);
  });
});
