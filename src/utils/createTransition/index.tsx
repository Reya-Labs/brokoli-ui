/**
 * Creates a CSS transition property value string.
 *
 * @param {string} properties - Specifies the CSS properties to which the transition effect should apply. Default is 'all'.
 * @param {string} duration - Defines the duration of the transition effect. Default is '200ms'.
 * @param {string} timingFunction - Specifies the timing function of the transition effect. Default is 'ease-in'.
 * @return {string} A concatenated string of the form 'properties duration timingFunction', representing the CSS transition property value.
 */

export const createTransition = (
  properties = 'all',
  duration = '200ms',
  timingFunction = 'ease-in',
) => {
  return `${properties} ${duration} ${timingFunction}`;
};
