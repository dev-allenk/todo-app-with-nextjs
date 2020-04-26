import { useEffect } from "react";

interface Props {
  target: React.MutableRefObject<Element | null>;
  onIntersect: IntersectionObserverCallback;
  root?: Element;
  rootMargin?: string;
  threshold?: number;
}

function useIntersectionObserver({
  target,
  onIntersect,
  root,
  rootMargin = "0px",
  threshold = 0.1,
}: Props) {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    const targetElement = target.current;
    observer.observe(targetElement!);

    return () => {
      observer.unobserve(targetElement!);
    };
  }, []);
}

export default useIntersectionObserver;
