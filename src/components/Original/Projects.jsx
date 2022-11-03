import React from 'react';
import { data } from '../../data/data.js';

const Projects = () => {
  // projects files list: U-Work, Ultrasonic etc.
  const project = data;

  return (
    <div
      name='projects'
      className='w-full md:h-screen  h-screen  text-[#3a4152]'
    >
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-xl sm:text-4xl font-bold inline border-b-4 text-[#3a4152] border-[#3764c5] '>
            Projects
          </p>
          <p className='text-[12px] sm:py-4 sm:text-sm'>
            Here are some of my recent projects I enjoyed developing
          </p>
        </div>

        {/* container for my projects */}
        <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
          {/* Gird Item with my projects */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div  '
            >
              {/* Hover effect for imgs */}
              <div className='opacity-0 group-hover:opacity-100 '>
                <span className='text-[7px]  tracking-tighter sm:tracking-wider text-white sm:text-2xl font bold'>
                  {item.name}
                </span>
                <div className='pt-8 text-center '>
                  <a href={item.github} target='blank'>
                    <button className='px-4 py-3 m-2 text-[9px] font-bold text-center text-gray-700 bg-white rounded-lg sm:text-lg'>
                      Code
                    </button>
                  </a>

                  <a href={item.live} target='blank'>
                    <button className='px-4 py-3 m-2 text-[10px] font-bold text-center text-gray-700 bg-white rounded-lg sm:text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
