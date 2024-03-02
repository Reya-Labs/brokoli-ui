// https://github.com/airbnb/visx/blob/master/packages/visx-xychart/src/typeguards/isValidNumber.ts
import { AxisScale } from '@visx/axis';

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
        month: { day: 'numeric', hour: 'numeric', month: 'numeric' },
        second: {
          hour: 'numeric',
          hour12: false,
          minute: 'numeric',
          second: 'numeric',
        },
        threeDays: { hour: 'numeric', weekday: 'short' },
        week: { hour: 'numeric', weekday: 'short' },
        year: { day: 'numeric', month: 'numeric', year: 'numeric' },
      } as const
    )[resolutionUnit],
  ).format(timestamp);

export const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export const lerp = (percent: number, from: number, to: number) => from + percent * (to - from);

export const map = (n: number, start1: number, stop1: number, start2: number, stop2: number) =>
  lerp((n - start1) / (stop1 - start1), start2, stop2);

// https://github.com/airbnb/visx/blob/master/packages/visx-xychart/src/typeguards/isValidNumber.ts
export function isValidNumber(_: unknown): _ is number {
  return _ != null && typeof _ === 'number' && !Number.isNaN(_) && Number.isFinite(_);
}

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

export function getScaleBandwidth<Scale extends AxisScale>(scale?: Scale) {
  // Broaden type before using 'xxx' in s as typeguard.
  const s = scale as AxisScale;
  return s && 'bandwidth' in s ? s?.bandwidth() ?? 0 : 0;
}
