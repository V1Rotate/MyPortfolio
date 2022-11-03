import React from 'react';
import EastSideImports from '../../assets/projects/inProgress/EastsideImports.png';
import HondaTorque from '../../assets/projects/inProgress/HondaTorque.png';
import Firebase from '../../assets/firebase.png';
import Typescript from '../../assets/typescript.svg';
import Javascript from '../../assets/javascript.png';
import Scss from '../../assets/sass.png';
import Mockapi from '../../assets/mockapi.png';
import Tailwind from '../../assets/tailwind.png';

const ProjectsInProgress = () => {
  return (
    <div
      name='projectsInProgress'
      className='w-full md:h-screen  h-screen  text-[#3a4152]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-xl sm:text-4xl font-bold inline border-b-4 text-[#3a4152] border-[#3764c5] '>
            Projects In Progress
          </p>
          <p className='text-[12px] py-0 sm:py-4 sm:text-sm'>
            Here are some projects I am currently developing:
          </p>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4 '>
          <div className=' h-[100px] sm:h-[250px] md:h-[350px] overflow-y-scroll scrollbar-hide  hover:cursor-all-scroll rounded-md shadow-lg shadow-[#040c16]'>
            <img src={EastSideImports} alt='EastSideImports img' />
          </div>
          <div className='flex flex-col items-center justify-center '>
            <p>
              Portal with used cars purchase and import from Japan. Being
              developed with React, Typescript, Redux, SCSS, Firebase, API.{' '}
            </p>
            <ul className='flex flex-row mt-4'>
              <li className='w-[45px]'>
                <img
                  src={Typescript}
                  alt='Firebase img'
                  className='rounded-md'
                />
              </li>
              <li className='w-[45px]'>
                <img
                  src={Javascript}
                  alt='Firebase img'
                  className='rounded-md'
                />
              </li>
              <li className='w-[45px]'>
                <img src={Scss} alt='Firebase img' className='rounded-md' />
              </li>
              <li className='w-[45px]'>
                <img src={Firebase} alt='Firebase img' />
              </li>
              <li className='w-[45px]'>
                <img src={Mockapi} alt='Firebase img' className='rounded-md' />
              </li>
            </ul>
          </div>
          <div className='overflow-y-scroll scrollbar-hide h-[100px] sm:h-[250px] md:h-[350px] hover:cursor-all-scroll rounded-md shadow-lg shadow-[#040c16]'>
            <img src={HondaTorque} alt='Honda Torque App img' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p>
              Honda Civic: Bolts torque specs guidance. Being developed with
              React, Typescript, Redux, Tailwind CSS.{' '}
            </p>
            <ul className='flex flex-row mt-4'>
              <li className='w-[45px]'>
                <img
                  src={Typescript}
                  alt='Firebase img'
                  className='rounded-md'
                />
              </li>
              <li className='w-[45px]'>
                <img
                  src={Javascript}
                  alt='Firebase img'
                  className='rounded-md'
                />
              </li>
              <li className='w-[45px]'>
                <img src={Tailwind} alt='Firebase img' className='rounded-md' />
              </li>
              <li className='w-[45px]'>
                <img src={Mockapi} alt='Firebase img' className='rounded-md' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInProgress;
