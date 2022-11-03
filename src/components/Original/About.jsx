import React from 'react';

const About = () => {
  return (
    <div name='about' className=' w-full h-screen text-[#3a4152] mt-8 sm:mt-0'>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
          <div className='pl-4 sm:pb-8 sm:text-right '>
            <p className=' text-xl sm:text-4xl font-bold inline border-b-4 border-[#3764c5]  '>
              About
            </p>
            <p className='py-4 text-md'>Who I am</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2  gap-2 sm:gap-8 px-4 mt-2 sm:mt-4'>
          <div className='text-sm font-bold sm:text-3xl sm:text-right'>
            <p className='mb-2'>.Software Developer</p>
            <p className='mb-2'>.DIY Mechanic and Car Restorer</p>
            <p className='mb-2'>.Creative Idea Generator</p>
          </div>
          <div className='text-[10px] sm:text-[14px] md:text-[16px]'>
            <p>
              My software development journey started long years ago with the
              completion of the basic course of programming and web development
              at the University. That helped me to develop a couple of
              applications for Taxi services and Car spare parts sales. Later,
              being educated in Mechanical Engineering, I've built my career in
              Project Management, Mechanical Engineering and Technical Sales in
              the field of a wide range of equipment and technical products.
            </p>
            <br />
            <p>
              At the time of the recent pandemic, quarantine, and our daughter's
              remote school education, she started learning programming, and I
              joined her - started to update my knowledge and skills. I was so
              excited and quickly became wired to web development starting to
              develop the application for my needs. I was so excited to realize
              that with my background I have tons of ideas for the applications
              I would be happy to develop, and how big opportunities Javascript
              and other technologies offer to developers. Completion of the
              ComIT, HarvardX and additional courses made my passion stronger,
              the passion to learn new technologies, pick up new tech stacks and
              develop some unique web applications.
            </p>
            <br />
            <p>
              I am actively looking for opportunities. I strongly believe that a
              package of knowledge, skills and experience I bring, will benefit
              my work on projects and related tasks in Software Development,
              working with internal and external customers, in a team and
              independently.
            </p>
            <br />
            <p>
              Please contact me if you have any questions. I would be happy to
              discuss open position details, my credentials and I can benefit
              the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
