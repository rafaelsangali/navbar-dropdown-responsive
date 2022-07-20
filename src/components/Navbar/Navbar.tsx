import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="bg-white fixed w-screen">
      <div className="flex w-auto items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={""} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <button>{open ? "fechar" : "abrir"}</button>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-3/5 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
    <div className="h-[1000px] bg-slate-600"></div>
    </>
  );
}
