import { browserI18n } from './index';

describe('browserI18n', () => {
  let languageGetter: ReturnType<typeof jest.spyOn>;

  beforeEach(() => {
    languageGetter = jest.spyOn(window.navigator, 'language', 'get');
  });

  test.each([
    // en-GB
    [
      'en-GB',
      {
        decimals: '.',
        group: 'auto',
        locale: 'en-GB',
        sign: 'auto',
        thousands: ',',
      },
    ],
    // 'ja' (Japanese)
    [
      'ja',
      {
        decimals: '.',
        group: 'auto',
        locale: 'ja',
        sign: 'auto',
        thousands: ',',
      },
    ],
    // 'ru' (Russian)
    [
      'ru',
      {
        decimals: ',',
        group: 'auto',
        locale: 'ru',
        sign: 'auto',
        thousands: ' ',
      },
    ],
  ])(
    'given navigator.language=%p - should return expected output',
    (mockedNavigatorLanguage, expected) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      languageGetter.mockReturnValue(mockedNavigatorLanguage);

      // Call the formatter function
      const retValue = browserI18n(mockedNavigatorLanguage);

      // Assert the result
      expect(retValue).toEqual(expect.objectContaining(expected));
    },
  );
});
