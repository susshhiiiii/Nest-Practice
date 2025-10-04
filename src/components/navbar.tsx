import Link from "next/link";
import React from "react";
const links = [
  {
    id: 1,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <div className="flex flex-row py-3 justify-between ">
      <Link className='font-black' href="/">Laminia</Link>
      <div className="flex md:flex-row flex-col gap-4">
        {links.map((link) => (
          <Link  key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className='bg-green-600 rounded px-1'>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
