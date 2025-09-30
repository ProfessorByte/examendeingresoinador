import { useRef, useEffect } from "react";

import type { Direction } from "@/types/split.types";

interface GutterProps {
  direction: Direction;
  getGutterProps: (
    direction: Direction,
    track: number,
  ) => React.HTMLAttributes<HTMLDivElement>;
  track: number;
}

export const Gutter = ({ direction, getGutterProps, track }: GutterProps) => {
  const gutterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gutterElement = gutterRef.current;
    if (!gutterElement) return;

    const handleTouchMove = (event: Event) => {
      event.preventDefault();
    };

    const handleTouchStart = (event: Event) => {
      event.preventDefault();
    };

    const options: AddEventListenerOptions = { passive: false };
    gutterElement.addEventListener("touchmove", handleTouchMove, options);
    gutterElement.addEventListener("touchstart", handleTouchStart, options);

    return () => {
      gutterElement.removeEventListener("touchmove", handleTouchMove, options);
      gutterElement.removeEventListener(
        "touchstart",
        handleTouchStart,
        options,
      );
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
