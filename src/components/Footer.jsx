import React from 'react';
import { logo } from '../assets/img';

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-20">
      <div className=" max-w-[1040px] mx-auto w-11/12">
        <img src={logo} alt="logo-footer" className=" w-24 h-24" />
        <h4 className=" font-semibold text-lg">Overlord Cafe</h4>
        <h4 className=" font-semibold text-lg">Something Delight and Tasty</h4>
      </div>
    </footer>
  );
};

export default Footer;
