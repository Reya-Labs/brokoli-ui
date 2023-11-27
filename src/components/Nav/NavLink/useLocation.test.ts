import { useLocation } from './useLocation';

describe('useLocation', () => {
  it('extracts pathname from a standard URL', () => {
    const url = 'http://localhost:3000/portfolio/overview';
    const result = useLocation(url);
    expect(result.pathname).toBe('portfolio/overview');
  });

  it('extracts pathname from a hash-based URL', () => {
    const url = 'http://localhost:3000/#/portfolio/overview';
    const result = useLocation(url);
    expect(result.pathname).toBe('portfolio/overview');
  });

  it('handles URLs with no path', () => {
    const url = 'http://localhost:3000';
    const result = useLocation(url);
    expect(result.pathname).toBe('');
  });

  it('handles URLs with only a hash', () => {
    const url = 'http://localhost:3000/#';
    const result = useLocation(url);
    expect(result.pathname).toBe('');
  });
});
