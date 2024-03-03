export function userPrefersReducedMotion() {
  const prefersReducedMotionQuery =
    typeof window === 'undefined' ? false : window.matchMedia('(prefers-reduced-motion: reduce)');
  return Boolean(!prefersReducedMotionQuery || !!prefersReducedMotionQuery.matches);
}
