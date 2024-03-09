import memoize from 'lodash/memoize';

const MEASUREMENT_ELEMENT_ID = '__react_svg_text_measurement_id';
function _getSvgTextWidth(str: string, style: object) {
  try {
    // Calculate length of each word to be used to determine number of words per line
    let textEl: SVGTextElement | null = document.getElementById(
      MEASUREMENT_ELEMENT_ID,
    ) as unknown as SVGTextElement;
    if (!textEl) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('aria-hidden', 'true');
      svg.style.width = '0';
      svg.style.height = '0';
      svg.style.position = 'absolute';
      svg.style.top = '-100%';
      svg.style.left = '-100%';
      textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      if (!textEl) {
        throw new Error('cannot create element');
      }
      textEl.setAttribute('id', MEASUREMENT_ELEMENT_ID);
      svg.appendChild(textEl);
      document.body.appendChild(svg);
    }
    Object.assign(textEl.style, style);
    textEl.textContent = str;
    return textEl.getComputedTextLength();
  } catch (e) {
    return 0;
  }
}
export const getSvgTextWidth = memoize(_getSvgTextWidth, function (str, style) {
  return `${str}_${JSON.stringify(style)}`;
});
