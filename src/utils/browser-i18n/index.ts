export function browserI18n(locale = window.navigator.language) {
  const o1 = new Intl.NumberFormat(locale).resolvedOptions();
  const o2 = new Intl.DateTimeFormat(locale).resolvedOptions();
  const o3 = new Intl.NumberFormat(locale).formatToParts(123456.789);
  return {
    calendar: o2.calendar,
    decimals: o3[3].value,
    group: o1.useGrouping,
    locale: o1.locale,
    sign: o1.signDisplay,
    thousands: o3[1].value,
    timeZone: o2.timeZone,
  };
}
