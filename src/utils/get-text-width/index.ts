import { getSpanTextWidth } from './get-span-text-width';
import { getSvgTextWidth } from './get-svg-text-width';

type TextWidthParams = {
  domElement: 'span' | 'svg-text';
  style: object;
  text: string;
};

export function getTextWidth({ text, domElement, style }: TextWidthParams): number {
  if (domElement === 'svg-text') {
    return getSvgTextWidth(text, style);
  }
  if (domElement === 'span') {
    return getSpanTextWidth(text, style);
  }
  return 0;
}
