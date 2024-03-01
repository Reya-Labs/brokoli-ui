import { allTimeUnits } from './time';

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
