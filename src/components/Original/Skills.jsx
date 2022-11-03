import React from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Typescript from '../../assets/typescript.svg';
import FireBase from '../../assets/firebase.png';
import GitHub from '../../assets/github.svg';
import Tailwind from '../../assets/tailwind.png';
import Node from '../../assets/node.png';
import Scss from '../../assets/Sass.svg';
import Styled from '../../assets/styled-components.png';
import Redux from '../../assets/redux.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  text-[#3a4152] mt-8 sm:mt-0'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-xl sm:text-4xl font-bold inline border-b-4 border-[#3764c5] '>
            Skills
          </p>
          <p className='text-[12px] sm:py-4 sm:text-sm'>
            These are the technologies I work with
          </p>
        </div>

        <div className='grid w-full grid-cols-3 gap-4 py-8 text-center sm:grid-cols-4'>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={HTML}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>HTML</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={CSS}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>CSS</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto mt-2 sm:mt-4 w-7 sm:w-20'
              src={Scss}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>SASS</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={Tailwind}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>TAILWIND</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={Styled}
              alt='HTML icon'
            />
            <p className='my-4 text-[8px] sm:text-md'>STYLED-COMPONENTS</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={ReactImg}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>REACT.JS</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={JavaScript}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={Typescript}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>TYPESCRIPT</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={Redux}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>REDUX TOOLKIT</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={Node}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>NODE.JS</p>
          </div>

          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={FireBase}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>FIREBASE</p>
          </div>
          <div className='shadow-md rounded-xl shadow-[#040c16] hover:scale-110 duration-500 w-15 sm:w-22 h-13 sm:h-18'>
            <img
              className='pt-4 mx-auto w-7 sm:w-20'
              src={GitHub}
              alt='HTML icon'
            />
            <p className='my-4 text-xs sm:text-md'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
