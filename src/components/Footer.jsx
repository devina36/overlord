import React from 'react';
import { logo } from '../assets/img';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-20">
      <div className=" max-w-[1040px] mx-auto w-11/12 grid grid-cols-12 gap-x-4">
        <div className=" col-span-4">
          <img src={logo} alt="logo-footer" className=" w-24 h-24" />
          <h4 className=" font-semibold text-lg">Overlord Cafe</h4>
          <h4 className=" font-semibold text-lg">Something Delight and Tasty</h4>
        </div>
        <div className="col-span-8 grid">
          <div className="">
            <h4 className=" font-semibold text-lg mb-5">Page</h4>
            <p className="text-txt leading-loose">Home</p>
            <p className="text-txt leading-loose">Menu</p>
            <p className="text-txt leading-loose">About</p>
            <p className="text-txt leading-loose">Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
