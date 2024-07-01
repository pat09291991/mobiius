"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: JSX.Element;
  animationClass: string;
  customClass?: string;
}

const AnimateOnView = ({ children, animationClass, customClass }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "150px",
  });

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${customClass} ${isAnimated ? animationClass : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnView;
