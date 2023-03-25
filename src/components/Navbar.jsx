import React, { useEffect, useState } from 'react';
import { logo } from '../assets/img';
import { navlink } from '../constant';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={` z-50 sticky top-0 bg-white ${scrolled && 'bg-slate-100/70 backdrop-blur shadow'}  `}>
        <div className="z-10 relative">
          <div className="bg-slate-50 z-10 relative">
            <nav className=" flex flex-rows py-1 sm:py-3 max-w-[1040px]  w-11/12 mx-auto items-center justify-between">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <img src={logo} alt="logo-overlord" className=" h-16 w-16  rounded-full" />
              </Link>

              <ul className="hidden md:flex gap-x-10 text-main text-lg font-semibold">
                {navlink.map((nav) => (
                  <li key={nav.id} className=" cursor-pointer">
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 w-fit lg:text-xl btn-Active text-black bg-accentGreen font-semibold  rounded-md border-2 border-black"
              >
                {open ? <HiX className=" fill-main" size={25} /> : <HiMenuAlt3 className=" fill-main" size={25} />}
              </button>
            </nav>
          </div>

          <nav
            className={` w-full md:hidden bg-main pt-28 pb-5 shadow transition-all duration-200 ease-in-out absolute z-0 ${
              open ? 'top-0  opacity-100' : '-top-[500px] opacity-0'
            } h-fit`}
          >
            <ul className=" z-20 w-11/12 mx-auto flex  gap-4 text-white font-semibold flex-col ">
              {navlink.map((nav) => (
                <li key={nav.id} className="w-full text-center cursor-pointer" onClick={() => setOpen(!open)}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="absolute md:hidden bg-black/60 backdrop-blur w-full h-full top-0 z-20"
        ></div>
      )}
    </>
  );
};

export default Navbar;
