import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterProps {
  parishName: string;
  mediaLinks?: {
    href: string;
    icon: string;
  }[];
}

const Footer = (props: FooterProps) => {
  const { parishName, mediaLinks } = props;
  const hasMediaLinks = mediaLinks !== undefined && mediaLinks.length > 0;
  return (
    <div
      className={cn(
        "w-full flex py-4 text-white",
        hasMediaLinks ? "justify-between" : "justify-center",
      )}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {parishName}. All rights reserved.
      </p>
      {hasMediaLinks ? (
        <div className="flex flex-row gap-4 items-center justify-end">
          {mediaLinks.map(({ href, icon }) => (
            <Link key={href} href={href} target="_blank">
              {icon}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
