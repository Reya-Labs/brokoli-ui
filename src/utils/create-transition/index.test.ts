import { createTransition } from './index';

describe('createTransition utility function', () => {
  it('should return the default transition', () => {
    const result = createTransition();
    expect(result).toBe('all 200ms ease-in');
  });

  it('should allow custom property with default duration and timing function', () => {
    const result = createTransition({ properties: 'opacity' });
    expect(result).toBe('opacity 200ms ease-in');
  });

  it('should allow custom duration with default property and timing function', () => {
    const result = createTransition({ duration: 300 });
    expect(result).toBe('all 300ms ease-in');
  });

  it('should allow custom timing function with default property and duration', () => {
    const result = createTransition({ timingFunction: 'ease-out' });
    expect(result).toBe('all 200ms ease-out');
  });

  it('should allow custom property and duration with default timing function', () => {
    const result = createTransition({ duration: 300, properties: 'opacity' });
    expect(result).toBe('opacity 300ms ease-in');
  });
});
