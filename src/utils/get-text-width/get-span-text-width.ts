const MEASUREMENT_ELEMENT_ID = '__react_span_text_measurement_id';

export function getSpanTextWidth(str: string, style: object): number {
  try {
    // Calculate length of each word to be used to determine number of words per line
    let textEl = document.getElementById(MEASUREMENT_ELEMENT_ID);
    if (!textEl) {
      textEl = document.createElement('span');
      textEl.setAttribute('id', MEASUREMENT_ELEMENT_ID);
      // Set the text, font size, and font family
      textEl.textContent = str;
      Object.assign(textEl.style, style);
      textEl.style.visibility = 'hidden'; // Make the span invisible
      textEl.style.whiteSpace = 'nowrap'; // Prevent text from wrapping
      textEl.style.position = 'absolute';
      textEl.style.top = '-100%';
      textEl.style.left = '-100%';
      // Append the span to the body
      document.body.appendChild(textEl);
    }
    Object.assign(textEl.style, style);
    return textEl.offsetWidth;
  } catch (e) {
    return 0;
  }
}
