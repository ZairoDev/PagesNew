export interface InviewPortType {
    distanceFromEnd: number;
    callback: () => boolean;
    target: HTMLElement;
  }
  
  const checkInViewIntersectionObserver = ({
    target,
    distanceFromEnd,
    callback,
  }: InviewPortType) => {
    const _funCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const unobserve = callback();
          unobserve && observer.unobserve(entry.target);
        }
      });
    };
  
    // Check browser support for IntersectionObserver
    if (typeof window.IntersectionObserver === "undefined") {
      console.error(
        "window.IntersectionObserver === undefined! Your browser does not support Intersection Observer."
      );
      return;
    }
  
    // Configure options for IntersectionObserver
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `${distanceFromEnd}px 0px`,
      threshold: 0,
    };
  
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(_funCallback, options);
  
    // Observe the target element
    target && observer.observe(target);
  };
  
  export default checkInViewIntersectionObserver;
  