export const isBrightColor = (color: string) => {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substring(0, 2), 16);
  const c_g = parseInt(hex.substring(2, 4), 16);
  const c_b = parseInt(hex.substring(4, 6), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
};
