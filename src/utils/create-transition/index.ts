/**
 * Creates a CSS transition property value string.
 *
 * @param {object} options - An object containing the transition options.
 * @param {string|string[]} [options.properties='all'] - Specifies the CSS properties to which the transition effect should apply.
 * @param {number} [options.duration=200] - Defines the duration of the transition effect in milliseconds.
 * @param {('ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear')} [options.timingFunction='ease-in'] - Specifies the timing function of the transition effect.
 * @return {string} A concatenated string representing the CSS transition property value.
 */

type TimingFunctionType =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'step-start'
  | 'step-end'
  | string;

type TransitionArgs = {
  duration?: number;
  properties?: string | string[];
  timingFunction?: TimingFunctionType;
};

export const createTransition = ({
  properties = 'all',
  duration = 200,
  timingFunction = 'linear',
}: TransitionArgs = {}) => {
  const formattedDuration = `${duration}ms`;
  if (!Array.isArray(properties)) {
    return `${(properties || 'all').trimStart().trimEnd()} ${formattedDuration} ${timingFunction}`;
  }
  return properties
    .map((p) => `${p.trimStart().trimEnd()} ${formattedDuration} ${timingFunction}`)
    .join(', ');
};
