import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen text-[#3a4152] flex flex-col justify-center items-center'
    >
      <form
        method='POST'
        action='https://getform.io/f/a0aa24eb-d76d-4828-96cf-9ebf3111c774'
        className='flex flex-col max-w-[600px] w-full  '
      >
        <div className='pb-8 pl-6 mx-auto sm:mx-0 sm:pl-0'>
          <p className='text-xl sm:text-4xl font-bold inline border-b-4 border-[#3764c5] '>
            Contact
          </p>

          <p className='#3a4152 text-md py-1 sm:py-4'>
            <p>I am always open for coversation. </p>
            <p>
              Please send me a message below or at{' '}
              <span>
                <a
                  href='mailto:contact@olegyadroshnikov.com'
                  className=' text-[#3764c5] hover:underline duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'
                >
                  contact@olegyadroshnikov.com
                </a>
              </span>
            </p>
          </p>
        </div>
        <div className='flex flex-col mx-auto'>
          <input
            className='bg-white p-2 rounded-md focus:outline-none w-[340px] sm:w-[580px] md:w-[660px] ml-4 md:ml-0 text-xs sm:text-lg mx-auto'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            className=' my-2 sm:my-4 p-2 bg-white rounded-md focus:outline-none w-[340px] sm:w-[580px] md:w-[660px] ml-4 md:ml-0 text-xs sm:text-lg mx-auto'
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-white p-2 rounded-md focus:outline-none w-[340px] sm:w-[580px] md:w-[660px] ml-4 md:ml-0 text-xs sm:text-lg mx-auto'
            name='message'
            rows='10'
            placeholder='Message...'
          ></textarea>
        </div>

        <button className='text-white bg-[#3764c5] rounded-lg hover:scale-105 duration-300 hover:bg-[#dd691e] text-md px-2 sm:px-4 py-1 sm:py-3 my-8 justify-center mx-auto flex items-center animate-pulse space-x-4 hover:animate-none'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
