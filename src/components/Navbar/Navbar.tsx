import { useState } from "react";
import { Link } from "react-router-dom";
import { linksNav } from "./mylinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white w-screen shadow-md flex items-center font-medium justify-around">
        <div className="p-5 md:w-auto w-full flex justify-between">
          <img src={""} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <button>{open ? "fechar" : "abrir"}</button>
          </div>
        </div>
        <nav>
          <ul className="md:flex hidden items-center gap-8">
            {linksNav.map((link, index) => (
              <li key={link.name + index}>
                <Link to={link.redirect} className="px-3 inline-block hover:text-green-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul
            className={`md:hidden bg-zinc-500 fixed w-3/5 top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            {linksNav.map((link, index) => (
              <li key={link.name + index}>
                <Link to={link.redirect} className="px-3 inline-block hover:text-green-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
