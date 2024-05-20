import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

export const Gutter = ({ direction, getGutterProps, track }) => {
  const gutterRef = useRef(null);

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (event.target === gutterRef.current) {
        event.preventDefault();
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    };
  }, [gutterRef]);

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

Gutter.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
  getGutterProps: PropTypes.func.isRequired,
  track: PropTypes.number.isRequired,
};
