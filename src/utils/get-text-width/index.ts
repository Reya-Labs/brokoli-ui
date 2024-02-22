type TextWidthParams = {
  text: string;
  fontSize: number; // Font size in pixels
  fontFamily: string;
};

export function getTextWidth({ text, fontSize, fontFamily }: TextWidthParams): number {
  // Create a span element
  const span = document.createElement('span');
  // Set the text, font size, and font family
  span.textContent = text;
  span.style.fontSize = `${fontSize}px`;
  span.style.fontFamily = fontFamily;
  span.style.visibility = 'hidden'; // Make the span invisible
  span.style.whiteSpace = 'nowrap'; // Prevent text from wrapping

  // Append the span to the body
  document.body.appendChild(span);

  // Measure the text width
  const width = span.offsetWidth;

  // Remove the span from the body
  document.body.removeChild(span);

  return width;
}
