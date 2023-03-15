import React, { useEffect, useState } from 'react';
import { logo } from '../assets/img';
import { navlink } from '../constant';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header className={` z-50 sticky top-0 bg-white ${scrolled && 'bg-slate-100/70 backdrop-blur shadow'}  `}>
      <nav className="  flex flex-rows py-3 max-w-[1040px]  w-11/12 mx-auto items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo-overlord" className=" h-16 w-16  rounded-full" />
        </Link>

        <ul className="hidden md:flex gap-x-10 text-main text-lg font-medium">
          {navlink.map((nav) => (
            <li key={nav.id} className=" cursor-pointer">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <button className="md:hidden p-2 w-fit lg:text-xl btn-Active text-black bg-accentGreen font-semibold  rounded-md border-2 border-black">
          <HiMenuAlt3 className=" fill-main" size={25} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
