import { shouldNotForwardProps } from '.';

describe('shouldNotForwardProps', () => {
  it('should return true for a prop not in the excluded list', () => {
    const excludedProps = ['typographyToken', 'error'];
    const shouldNotForward = shouldNotForwardProps(excludedProps);

    expect(shouldNotForward.shouldForwardProp('someProp')).toBe(true);
    expect(shouldNotForward.shouldForwardProp('otherProp')).toBe(true);
  });

  it('should return false for a prop in the excluded list', () => {
    const excludedProps = ['typographyToken', 'error'];
    const shouldNotForward = shouldNotForwardProps(excludedProps);

    expect(shouldNotForward.shouldForwardProp('typographyToken')).toBe(false);
    expect(shouldNotForward.shouldForwardProp('error')).toBe(false);
  });

  it('should return false for an empty excluded list', () => {
    const excludedProps: string[] = [];
    const shouldNotForward = shouldNotForwardProps(excludedProps);

    expect(shouldNotForward.shouldForwardProp('someProp')).toBe(true);
    expect(shouldNotForward.shouldForwardProp('otherProp')).toBe(true);
  });
});
