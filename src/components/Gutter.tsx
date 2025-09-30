import { useRef, useEffect } from "react";

import type { Direction } from "@/utils/interfaces";

interface GutterProps {
  direction: Direction;
  getGutterProps: (
    direction: Direction,
    track: number,
  ) => React.HTMLAttributes<HTMLDivElement>;
  track: number;
}

export const Gutter = ({ direction, getGutterProps, track }: GutterProps) => {
  const gutterRef = useRef(null);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (event.target === gutterRef.current) {
        event.preventDefault();
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      } as EventListenerOptions);
    };
  }, []);

  return (
    <div
      ref={gutterRef}
      className={`bg-brand-gray bg-no-repeat bg-center ${
        direction === "row"
          ? "bg-horizontal-split cursor-row-resize"
          : "bg-vertical-split cursor-col-resize"
      }`}
      {...getGutterProps(direction, track)}
    />
  );
};
