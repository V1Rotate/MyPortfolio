import React from 'react';

import Testimonial1 from '../../assets/testimonials/tes1-img.png';
import Testimonial2 from '../../assets/testimonials/tes2-img.png';
import Testimonial3 from '../../assets/testimonials/tes3-img.png';
import Testimonial4 from '../../assets/testimonials/tes4-img.png';
import Testimonial5 from '../../assets/testimonials/tes5-img.png';
import Testimonial6 from '../../assets/testimonials/tes6-img.png';

const Testimonials = () => {
  return (
    <div
      name='testimonials'
      className='w-full h-screen  text-[#3a4152] sm:ml-[140px]'
    >
      {/* Container */}
      <div className='max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className=' text-xl sm:text-4xl font-bold inline border-b-4 border-[#3764c5] '>
            Testimonials
          </p>

          <p className='pt-4 text-md'>This is how I am described by others</p>
        </div>

        <div className='grid w-full grid-cols-1 gap-2 py-4 ml-20 text-center sm:py-8 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3 lg:ml-0'>
          <div className='shadow-md w-[180px]  md:w-[320px] lg:w-[380px] rounded-xl shadow-[#040c16] hover:scale-150 duration-700 flex justify-center items-center hover:shadow-[#3764c5]'>
            <img
              className='w-full mx-auto rounded-xl'
              src={Testimonial1}
              alt='Tesimonial1 screenshot'
            />
          </div>
          <div className='shadow-md w-[180px] md:w-[320px] lg:w-[380px] rounded-xl shadow-[#040c16] hover:scale-150 duration-700 hover:shadow-[#3764c5]'>
            <img
              className='w-full mx-auto rounded-xl'
              src={Testimonial2}
              alt='Tesimonial2 screenshot'
            />
          </div>
          <div className='shadow-md w-[180px] md:w-[320px] lg:w-[380px] rounded-xl shadow-[#040c16] hover:scale-150 duration-700 hover:shadow-[#3764c5]'>
            <img
              className='w-full mx-auto rounded-xl'
              src={Testimonial3}
              alt='Tesimonial3 screenshot'
            />
          </div>
          <div className='shadow-md w-[180px]  md:w-[320px] lg:w-[380px] rounded-xl shadow-[#040c16] hover:scale-150 duration-700 hover:shadow-[#3764c5]'>
            <img
              className='w-full mx-auto rounded-xl'
              src={Testimonial4}
              alt='Tesimonial4 screenshot'
            />
          </div>
          <div className='shadow-md w-[180px]  md:w-[320px] lg:w-[380px] rounded-xl shadow-[#040c16] hover:scale-150 duration-700 flex justify-center items-center hover:shadow-[#3764c5]'>
            <img
              className='w-full mx-auto rounded-xl'
              src={Testimonial5}
              alt='Tesimonial5 screenshot'
            />
          </div>
          <div className='shadow-md w-[180px] md:w-[320px] lg:w-[380px] rounded-xl shadow-[#040c16] hover:shadow-[#3764c5] hover:scale-150 duration-700 flex justify-center items-center'>
            <img
              className='w-full mx-auto rounded-xl'
              src={Testimonial6}
              alt='Tesimonial6 screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
