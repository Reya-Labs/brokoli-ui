export const formatAbsoluteTime = (
  timestamp: number,
  {
    locale,
    resolutionUnit = 'second',
  }: {
    locale: string;
    resolutionUnit: keyof typeof allTimeUnits;
  },
) =>
  new Intl.DateTimeFormat(
    locale,
    (
      {
        centisecond: {
          hour: 'numeric',
          hour12: false,
          minute: 'numeric',
          second: 'numeric',
        },
        day: { hour: 'numeric', minute: 'numeric' },
        decisecond: {
          hour: 'numeric',
          hour12: false,
          minute: 'numeric',
          second: 'numeric',
        },
        hour: { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric' },
        millisecond: {
          hour: 'numeric',
          hour12: false,
          minute: 'numeric',
          second: 'numeric',
        },
        minute: { hour: 'numeric', hour12: false, minute: 'numeric', second: 'numeric' },
        month: { day: '2-digit', month: 'short' },
        second: {
          hour: 'numeric',
          hour12: false,
          minute: 'numeric',
          second: 'numeric',
        },
        threeDays: { hour: 'numeric', minute: 'numeric', weekday: 'short' },
        week: { weekday: 'short' },
        year: { day: '2-digit', month: '2-digit', year: '2-digit' },
      } as const
    )[resolutionUnit],
  ).format(timestamp);

export const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

/** Object.entries() with key types preserved */
export const objectEntries = <T extends object>(t: T) =>
  Object.entries(t) as { [K in keyof T]: [K, T[K]] }[keyof T][];

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
