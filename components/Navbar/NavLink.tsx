import Link from "next/link";

export interface NavLinkProps {
  href: string;
  name: string;
}

const NavLink = (props: NavLinkProps) => {
  const { href, name } = props;
  return (
    <li className="p-2 px-4 rounded-sm cursor-pointer">
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavLink;
