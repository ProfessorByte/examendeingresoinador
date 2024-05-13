import PropTypes from "prop-types";

export const Gutter = ({ direction, getGutterProps, track }) => {
  return (
    <div
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
