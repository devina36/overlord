import React from 'react';
import { dot } from '../assets/element';
import { food1, food2, food3 } from '../assets/img';
import { SectionWrapper } from '../hoc';

const Menu = () => {
  return (
    <div className="z-0 overflow-hidden relative bg-slate-50 -mt-10 md:-mt-28">
      <div className=" relative max-w-[1040px] w-11/12 mx-auto py-20">
        <p className=" text-secondary text-center">Menu</p>
        <h3 className="text-center text-2xl mb-20 font-semibold">Our Signature Dish</h3>
        <div className="flex align-baseline justify-between relative">
          <div className=" w-1/3 max-w-[250px] h-fit">
            <img src={food1} alt="" className=" object-cover w-full aspect-square" />
            <h4 className=" font-semibold text-xl mt-5 mb-3">Cireng</h4>
            <p className="w-full text-stone-700">
              It is made from a mixture of tapioca flour, wheat flour, and seasonings, and deep-fried until crispy and
              golden brown.
            </p>
          </div>
          <div className=" w-1/3 max-w-[250px] my-32 h-fit ">
            <img src={food2} alt="" className=" object-cover w-full aspect-square" />
            <h4 className=" font-semibold text-xl mt-5 mb-3">Nugget</h4>
            <p className="w-full text-stone-700">
              bite-sized piece of food that is typically made of chicken, fish, or other types of meat that are breaded
              and deep-fried
            </p>
          </div>
          <div className=" w-1/3 max-w-[250px] flex flex-col self-end h-fit">
            <img src={food3} alt="" className=" object-cover w-full aspect-square" />
            <h4 className=" font-semibold text-xl mt-5 mb-3">Americano</h4>
            <p className="w-full">coffee beverage that is made by adding hot water to a shot or two of espresso</p>
          </div>
          <div className="absolute bottom-0 -left-12">
            <img src={dot} alt="dot-menu" className=" rotate-90 h-32 w-auto" />
          </div>
          <div className="absolute top-0 -right-12">
            <img src={dot} alt="dot-menu" className=" rotate-90 h-32 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Menu, 'menu');
