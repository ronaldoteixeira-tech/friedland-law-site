import { useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useRef } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const CountUp = ({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: CountUpProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(value);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default CountUp;
