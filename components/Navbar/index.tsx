import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center p-2">
      <Link href="/" className="shrink-0">
        <img
          className="h-20 w-auto object-contain"
          src="/st-george.png"
          alt="St. George Serbian Orthodox Church"
        />
      </Link>
      <ul className="w-full flex flex-row justify-end items-center gap-1 p-2 text-white text-md text-shadow-2xl font-bold">
        <NavLink href="/" name="Home" />
        <NavLink href="/about" name="About" />
        <NavLink href="/video" name="Video" />
        <NavLink href="/map" name="Map" />
        <NavLink href="/calendar" name="Calendar" />
        <NavLink href="/contact" name="Contact" />
      </ul>
    </div>
  );
};

export default Navbar;
