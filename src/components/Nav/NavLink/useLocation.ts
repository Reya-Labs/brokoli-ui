export const useLocation = (url = window.location.href) => {
  const parsedUrl = new URL(url);
  const path = parsedUrl.pathname + parsedUrl.hash;

  // Remove leading slashes, hash, and any empty segments
  const segments = path.split('/').filter((segment) => segment && segment !== '#');

  return {
    pathname: `/${segments.join('/')}`,
  };
};
