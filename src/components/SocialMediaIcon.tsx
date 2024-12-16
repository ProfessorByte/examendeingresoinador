import Link from "next/link";

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
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <MediaIcon
        width={size}
        height={size}
        fill={fill}
        className="hover:scale-110 transition-all duration-300"
      />
    </Link>
  );
};
