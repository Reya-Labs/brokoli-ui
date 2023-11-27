export const useLocation = () => {
  return {
    pathname: window?.location?.pathname || '',
  };
};
