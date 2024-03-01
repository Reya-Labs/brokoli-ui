export const timeUnits = {
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  month: 2628000000,
  second: 1000,
  week: 604800000,
  year: 31536000000,
} satisfies Partial<Record<Intl.RelativeTimeFormatUnit, number>>;

export const smallTimeUnits = {
  centisecond: 10,
  decisecond: 100,
  millisecond: 1,
} satisfies Partial<Record<string, number>>;

export const otherTimeUnits = {
  threeDays: 3 * timeUnits.day,
} satisfies Partial<Record<string, number>>;

export const allTimeUnits = {
  ...timeUnits,
  ...smallTimeUnits,
  ...otherTimeUnits,
};
