import React from 'react';
import { food1, food2, food3, img1, img2, img3, img4, img6, img7, img8 } from '../assets/img';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <section className="bg-main overflow-x-hidden -mt-20 ">
      <div className=" max-w-[1040px] w-full md:w-11/12 mx-auto pt-20">
        <div className="text-white text-center w-11/12 md:w-3/4 mx-auto mb-16">
          <p className="text-center text-secondary">Overview</p>
          <div className="  relative flex justify-center items-center mb-5">
            <h2 className=" w-fit before:hidden before:absolute before:min-w-fit before:-inset-1 before:-skew-y-3 before:bg-accentGreen relative inline-block">
              <span className="font-semibold text-white text-2xl relative ">Who We Are</span>
            </h2>
          </div>
          <p className=" md:text-lg text-secondary text-center font-semibold tracking-[0.015] md:leading-[1.5]">
            <span className=" text-xl">"</span> Welcome to our cafe, a community-oriented space where you can work,
            relax, and connect with others. Our locally owned establishment values inclusivity, sustainability, and
            customer service. We offer high-speed internet. Come visit us and be a part of our thriving community{' '}
            <span className=" text-xl">"</span>
          </p>
        </div>

        <div className="grid grid-cols-3  sm:grid-cols-5 gap-x-1 md:gap-x-2 lg:gap-x-3 place-items-end">
          <div className="hidden w-full sm:grid grid-flow-row gap-1 md:gap-2 lg:gap-3">
            <img src={img7} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
            <img src={img2} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
          </div>
          <div className="w-full grid grid-flow-row gap-1 md:gap-2 lg:gap-3">
            <img src={img1} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
            <img src={img6} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
          </div>
          <div className="w-full grid grid-flow-row gap-1 md:gap-2 lg:gap-3">
            <img src={img2} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
            <img src={food2} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
            <img src={img4} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
          </div>
          <div className="w-full grid grid-flow-row gap-1 md:gap-2 lg:gap-3">
            <img src={img8} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
            <img src={food1} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
          </div>
          <div className="hidden w-full sm:grid grid-flow-row gap-1 md:gap-2 lg:gap-3">
            <img src={food3} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
            <img src={img3} alt="" className="border-2 lg:border-4 border-txt  rounded-lg" />
          </div>
        </div>
      </div>
    </section>
    // <div className=" bg-slate-50 pb-5 relative ">
    //   <div className="z-10 md:pt-0  max-w-[1040px] mb-28 mt-5 w-11/12 flex items-center justify-center md:justify-start flex-col md:flex-row  mx-auto">
    //     <div className="z-10  basis-full relative justify-center md:justify-start md:basis-2/5 flex flex-row items-center gap-3">
    //       <div className="basis-1/3 flex flex-col ">
    //         <div className="border-4 border-txt rounded-xl transform -translate-x-6 -translate-y-8  scale-95 -rotate-6">
    //           <motion.img
    //             variants={fadeIn('up', 'spring', 0, 0.75)}
    //             src="/assets/food3.jpeg"
    //             alt="img1"
    //             loading="lazy"
    //             className=" rounded-lg"
    //           />
    //         </div>
    //         <div className="border-4 border-txt rounded-xl transform -translate-x-8 scale-125 ">
    //           <motion.img
    //             variants={fadeIn('up', 'spring', 1, 0.75)}
    //             src="/assets/img7.jpeg"
    //             alt="img1"
    //             loading="lazy"
    //             className=" rounded-lg"
    //           />
    //         </div>
    //       </div>
    //       <div className=" basis-1/3 flex flex-col gap-y-3">
    //         <div className=" border-4 border-txt rounded-xl rotate-6 translate-x-5 -translate-y-10 scale-[1.2]">
    //           <motion.img
    //             variants={fadeIn('up', 'spring', 0.5, 0.75)}
    //             src="/assets/img1.jpeg"
    //             alt="img1"
    //             loading="lazy"
    //             className=" rounded-lg"
    //           />
    //         </div>
    //         <div className=" border-4 border-txt rounded-xl translate-x-4 -translate-y-4">
    //           <motion.img
    //             variants={fadeIn('up', 'spring', 1.5, 0.75)}
    //             src="/assets/food2.jpeg"
    //             alt="img1"
    //             loading="lazy"
    //             className=" rounded-lg"
    //           />
    //         </div>
    //         <div className="border-4 border-txt rounded-xl rotate-[10deg] scale-110">
    //           <motion.img
    //             variants={fadeIn('up', 'spring', 2, 0.75)}
    //             src="/assets/img8.jpeg"
    //             alt="img1"
    //             loading="lazy"
    //             className=" rounded-lg"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="z-20 order-first relative md:order-last basis-full mb-20 md:basis-3/5">
    //       <div className=" z-10  relative flex justify-center items-center">
    //         <h2 className=" w-fit before:block before:absolute before:min-w-fit before:-inset-1 before:-skew-y-3 before:bg-accentGreen relative inline-block">
    //           <span className="font-bold text-main text-3xl relative ">Who We Are</span>
    //         </h2>
    //       </div>
    //       <motion.div variants={zoomIn(0.5, 0.5)} className="z-0 relative flex flex-col mx-auto w-full -mt-5">
    //         <div className="absolute -top-6 -left-5">
    //           <img src={comma} alt="" className="w-20 rotate-180" />
    //         </div>
    //         <div className=" z-10 py-10 px-5 bg-main rounded-md">
    //           <p className=" md:text-base lg:text-[22px] text-white text-center font-semibold tracking-wide leading-normal">
    //             Welcome to our cafe, a community-oriented space where you can work, relax, and connect with others. Our
    //             locally owned establishment values inclusivity, sustainability, and customer service. We offer
    //             high-speed internet. Come visit us and be a part of our thriving community
    //           </p>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    //   <div className="z-0 absolute -top-20 rotate-180 right-0">
    //     <img src={zigzag2} alt="zig-about" className="w-24 md:w-28 lg:w-36" />
    //   </div>
    //   <div className="z-0 absolute bottom-1/2 w-1/5 translate-y-1/2 opacity-70 -rotate-90 -left-5 ">
    //     <img src={zigzag3} alt="nut-about" className="w-full h-auto" />
    //   </div>
    // </div>
  );
};

export default SectionWrapper(About, 'about');
