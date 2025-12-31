import Link from "next/link";

export interface NavbarProps {
  img: string;
  links: {
    href: string;
    name: string;
  }[];
}

const Navbar = (props: NavbarProps) => {
  const { img, links } = props;
  return (
    <div className="w-full flex flex-row justify-between items-center p-2">
      <Link href="/" className="shrink-0">
        <img
          className="h-30 w-auto object-contain"
          src={img}
          alt="St. George Serbian Orthodox Church"
        />
      </Link>
      <ul className="w-full flex flex-row justify-end items-center gap-1 p-2 text-white text-md text-shadow-2xl font-bold">
        {links.map((link) => (
          <li key={link.href} className="p-2 px-2 rounded-sm cursor-pointer">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
