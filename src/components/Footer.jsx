import React, { useContext } from 'react';
import { logo } from '../assets/img';
import { BsInstagram, BsTiktok } from 'react-icons/bs';
import { widthContext } from '../App';

const Details = () => {
  return (
    <>
      <div className="col-span-10 sm:col-span-5 lg:col-span-5">
        <h4 className=" font-semibold text-lg mb-3 mb:mb-5">Address</h4>
        <p className="text-stone-700 text-sm leading-loose">
          Jl. Sudanco Supriadi 22, Mojoroto, Kec.Mojoroto, Kota Kediri, Jawa Timur
        </p>
      </div>
      <div className=" col-span-12 sm:col-span-6 lg:col-span-4">
        <h4 className=" font-semibold text-lg mb-3 mb:mb-5">Contact</h4>
        <p className="text-stone-700 text-sm leading-loose">+62 895-4140-27825</p>
        <p className="text-stone-700 text-sm leading-loose">overlord.delight@gmail.com</p>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3">
        <h4 className=" font-semibold text-lg mb-3 mb:mb-5">Office</h4>
        <p className="text-stone-700 text-sm leading-loose">Monday-Sunday</p>
        <p className="text-stone-700 text-sm leading-loose">3PM - 12AM</p>
      </div>
    </>
  );
};

const Footer = () => {
  const width = useContext(widthContext);
  return (
    <>
      <footer className="bg-slate-100 pt-20 pb-7 sm:pb-20">
        <div className=" max-w-[1040px] mx-auto w-11/12 grid grid-cols-12 gap-x-2 gap-y-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <img src={logo} alt="logo-footer" width={112} height={112} className=" w-24 h-24" />
            <h4 className=" font-semibold text-lg">Overlord Cafe</h4>
            <h4 className=" font-semibold text-lg">Something Delight and Tasty</h4>
          </div>
          {width < 1024 ? (
            <Details />
          ) : (
            <div className=" lg:col-span-8 grid gap-3 grid-cols-12 place-content-between">
              <Details />
            </div>
          )}
        </div>
      </footer>
      <div className=" bg-main py-3">
        <div className=" max-w-[1040px] mx-auto w-11/12 flex items-center justify-between">
          <p className="text-sm text-secondary "> ©2023 Copyright overlord.delight </p>
          <div className="flex gap-5">
            <a href="https://instagram.com/overlord.delight?igshid=YmMyMTA2M2Y=">
              <BsInstagram size={25} className=" fill-secondary hover:fill-white" />
            </a>
            <a href="https://www.tiktok.com/@overlord.delight?_t=8aVEfvqY2B0&_r=1">
              <BsTiktok size={25} className=" fill-secondary hover:fill-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
