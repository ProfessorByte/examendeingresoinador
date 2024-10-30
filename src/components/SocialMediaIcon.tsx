interface SocialMediaIconProps {
  MediaIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
  size?: number;
  fill?: string;
}

export const SocialMediaIcon = ({
  MediaIcon,
  href,
  size = 32,
  fill = "#f3f4f6",
}: SocialMediaIconProps) => {
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
