import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const elemento = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elemento.classList.add("visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (elemento) observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return ref;
}