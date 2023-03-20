import { motion } from 'framer-motion';
import React from 'react';
import { dot } from '../assets/element';
import { menu } from '../constant';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

const Menu = () => {
  const fade = (i) => {
    if (i % 2 === 0) {
      fadeIn('down', 'spring', 0.5, 0.5);
    } else {
      fadeIn('up', 'spring', 0.5, 0.5);
    }
  };

  return (
    <div className="z-10 overflow-x-hidden relative bg-slate-50 -mt-10 md:-mt-28">
      <div className=" max-w-[1040px] w-11/12 mx-auto py-20">
        <p className=" text-secondary text-center tracking-widest">Menu</p>
        <h3 className="text-center text-3xl mb-10 md:mb-20 font-semibold">Our Signature Dish</h3>
        <div className="flex flex-col sm:flex-row w-full gap-5 sm:align-baseline justify-between relative">
          {menu.map((item, i) => (
            <motion.div
              variants={i % 2 === 0 ? fadeIn('down', 'spring', 0.75, 1) : fadeIn('up', 'spring', 0.75, 1)}
              key={item.id}
              className="flex items-center flex-row gap-x-3 sm:flex-col z-10 w-full sm:w-1/3 md:max-w-[250px] h-fit even:flex-row-reverse even:sm:flex-col even:md:my-32 odd:md:self-end first:odd:self-start "
            >
              <div className=" w-1/2 sm:w-full ">
                <img src={item.link} alt={`menu-${item.id}`} className="object-cover w-full  aspect-square" />
              </div>
              <div className="w-1/2 sm:w-full">
                <h4 className=" font-semibold text-xl sm:mt-5 mb-3">{item.title}</h4>
                <p className="w-full text-sm text-stone-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute z-0 -bottom-20 md:bottom-0 -left-20  md:left-0">
            <img src={dot} alt="dot-menu" className=" h-28 md:h-32 w-auto" />
          </div>
          <div className="absolute z-0 -top-10 md:top-0 -right-20 md:right-0">
            <img src={dot} alt="dot-menu-2" className=" md:rotate-90 h-32 w-auto" />
          </div>

          {/* <div className="flex items-center flex-row gap-x-3 sm:flex-col z-10 w-full sm:w-1/3 md:max-w-[250px] h-fit">
            <div className=" w-1/2 sm:w-full ">
              <img src={food1} alt="" className=" object-cover w-full  aspect-square" />
            </div>
            <div className="w-1/2 sm:w-full">
              <h4 className=" font-semibold text-xl sm:mt-5 mb-3">Cireng</h4>
              <p className="w-full text-sm text-stone-700">
                mixture of tapioca flour, wheat flour, and seasonings, and deep-fried until crispy
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-x-3 flex-row-reverse sm:flex-col z-10 w-full sm:w-1/3 md:max-w-[250px] md:my-32 h-fit ">
            <div className=" w-1/2  sm:w-full ">
              <img src={food2} alt="" className=" object-cover w-full  aspect-square" />
            </div>
            <div className="w-1/2 sm:w-full">
              <h4 className=" font-semibold text-xl sm:mt-5 mb-3">Nugget</h4>
              <p className="w-full text-sm text-stone-700">
                bite-sized piece of food that is typically made of chicken that are breaded and deep-fried
              </p>
            </div>
          </div>
          <div className=" z-10 items-center w-full sm:w-1/3 md:max-w-[250px] flex flex-row gap-x-3 sm:flex-col md:self-end h-fit">
            <div className=" w-1/2  sm:w-full ">
              <img src={food3} alt="" className=" object-cover w-full  aspect-square" />
            </div>
            <div className="w-1/2 sm:w-full">
              <h4 className=" font-semibold text-xl sm:mt-5 mb-3">Americano</h4>
              <p className="w-full text-stone-700 text-sm">
                coffee beverage that is made by adding hot water to a shot or two of espresso
              </p>
            </div>
          </div>
          <div className="absolute z-0 -bottom-20 md:bottom-0 -left-20  md:left-0">
            <img src={dot} alt="dot-menu" className=" h-28 md:h-32 w-auto" />
          </div>
          <div className="absolute z-0 -top-10 md:top-0 -right-20 md:right-0">
            <img src={dot} alt="dot-menu" className=" md:rotate-90 h-32 w-auto" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Menu, 'menu');
