import PropTypes from "prop-types";

export const SocialMediaIcon = ({
  MediaIcon,
  href,
  size = 32,
  fill = "#f3f4f6",
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <MediaIcon
        width={size}
        height={size}
        fill={fill}
        className="hover:scale-110 transition-all duration-300"
      />
    </a>
  );
};

SocialMediaIcon.propTypes = {
  MediaIcon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
};
