import { createTransition } from './index';

describe('createTransition utility function', () => {
  it('should return the default transition', () => {
    const result = createTransition();
    expect(result).toBe('all 200ms linear');
  });

  it('should allow custom property with default duration and timing function', () => {
    const result = createTransition({ properties: 'opacity' });
    expect(result).toBe('opacity 200ms linear');
  });

  it('should allow custom duration with default property and timing function', () => {
    const result = createTransition({ duration: 300 });
    expect(result).toBe('all 300ms linear');
  });

  it('should allow custom timing function with default property and duration', () => {
    const result = createTransition({ timingFunction: 'ease-out' });
    expect(result).toBe('all 200ms ease-out');
  });

  it('should allow custom property and duration with default timing function', () => {
    const result = createTransition({ duration: 300, properties: 'opacity' });
    expect(result).toBe('opacity 300ms linear');
  });

  it('should allow custom timing function, custom duration and custom properties', () => {
    const result = createTransition({
      duration: 500,
      properties: ['background', 'border', 'color'],
      timingFunction: 'ease-out',
    });
    expect(result).toBe('background 500ms ease-out, border 500ms ease-out, color 500ms ease-out');
  });
});
