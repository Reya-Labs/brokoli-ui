import { isBaseColorToken } from './isBaseColorToken';

describe('isBaseColorToken', () => {
  it('should return true for valid base color tokens', () => {
    expect(isBaseColorToken('liberty')).toBe(true);
    expect(isBaseColorToken('lavenderWeb')).toBe(true);
    expect(isBaseColorToken('skyBlueCrayola')).toBe(true);
    expect(isBaseColorToken('orangeYellow')).toBe(true);
    expect(isBaseColorToken('wildStrawberry')).toBe(true);
    expect(isBaseColorToken('ultramarineBlue')).toBe(true);
  });

  it('should return false for invalid tokens', () => {
    expect(isBaseColorToken('')).toBe(false);
    expect(isBaseColorToken('not-a-color-token')).toBe(false);
    expect(isBaseColorToken('some-other-token')).toBe(false);
  });
});
