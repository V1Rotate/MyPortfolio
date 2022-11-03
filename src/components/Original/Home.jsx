import React from 'react';
import Photo from '../../assets/olegImg.png';

function Home() {
  return (
    <div
      name='home'
      className='w-full h-screen text-[#3a4152] flex justify-center items-center'
    >
      <div className='flex flex-col xl:flex-row max-w-[1600px] ml-24 '>
        <div className='flex items-center justify-center mr-10 mb-10 hover:scale-105 duration-1000 lg:w-[350px] md:w-[300px] sm:w-[250px] w-[150px] ml-10'>
          <img src={Photo} alt='Oleg pic' className='rounded-full ' />
        </div>
        <div className=' flex flex-col justify-center xl:w-[800px] lg:w-[750px] sm:w-[660px] w-[480px] ml-3 pl-4'>
          <h1 className='mb-3 text-2xl font-bold sm:text-4xl md:text-5xl xl:text-6xl'>
            Hi, I'm <span className='text-[#3764c5]'>Oleg Yadroshnikov</span>
          </h1>
          <h2 className='mb-2 text-2xl font-bold md:text-5xl'>
            Software Developer
          </h2>
          <p className=' text-sm sm:text-md  md:text-lg mb-6 w-[300px] sm:w-[640px]'>
            I am focused on developing responsive front-end web applications
            with back-end technologies integration that exceed users
            expectations.
          </p>

          <div>
            <button className='text-white bg-[#3764c5] rounded-lg hover:scale-105 duration-300 hover:bg-[#dd691e] px-1 sm:px-3 hover:px-4 py-1 text-md sm:py-2 items-center animate-pulse flex space-x-4 hover:animate-none'>
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
