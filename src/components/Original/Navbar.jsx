import React, { useState } from 'react';
import Logo from '../../assets/olegLogo.png';
import { FaBars, FaTimes, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-10  w-full h-[80px] flex justify-between items-center px-4  text-[#3a4152]'>
      <div className='duration-300 cursor-pointer hover:scale-105'>
        <img src={Logo} alt='Oleg logo' className=' w-[80px] sm:w-[140px]' />
      </div>

      <ul className='hidden lg:flex '>
        <li className='hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:scale-105 hover:underline hover:underline-offset-8 font-bold duration-300 cursor-pointer  decoration-[#3764c5]'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-105 hover:underline hover:underline-offset-8  font-bold duration-300 cursor-pointer  decoration-[#3764c5]'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-105 hover:underline hover:underline-offset-8 font-bold duration-300 cursor-pointer  decoration-[#3764c5]'>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='hover:scale-105 hover:underline hover:underline-offset-8 font-bold duration-300 cursor-pointer  decoration-[#3764c5]'>
          <Link to='projectsInProgress' smooth={true} duration={500}>
            Projects In Progress
          </Link>
        </li>
        <li className='hover:scale-105 hover:underline hover:underline-offset-8 font-bold duration-300 cursor-pointer  decoration-[#3764c5]'>
          <Link to='testimonials' smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className='hover:scale-105 hover:underline hover:underline-offset-8 font-bold duration-300 cursor-pointer  decoration-[#3764c5]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='z-10 lg:hidden'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#c4c4c4] flex flex-col justify-center items-center'
        }
      >
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link
            onClick={handleClick}
            to='projects'
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link
            onClick={handleClick}
            to='projectsInProgress'
            smooth={true}
            duration={500}
          >
            Projects In Progress
          </Link>
        </li>
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link
            onClick={handleClick}
            to='testimonials'
            smooth={true}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li class='py-6 text-2xl sm:text-3xl hover:scale-105 hover:underline font-bold duration-300 hover:underline-offset-8 cursor-pointer  decoration-[#3764c5]'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-3px] duration-300 bg-[#3764c5] mb-0.5 rounded-md'>
            <a
              className='flex items-center justify-between w-full text-white'
              href='https://www.linkedin.com/in/yadroshnikov/'
              target='blank'
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#25292f] mb-0.5 rounded-md'>
            <a
              className='flex items-center justify-between w-full text-white'
              href='https://github.com/V1Rotate'
              target='blank'
            >
              GitHub <BsGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-7px] duration-300 bg-[#5498f3] mb-0.5 rounded-md'>
            <a
              className='flex items-center justify-between w-full text-white'
              href='https://twitter.com/Olegnskyahoo'
              target='blank'
            >
              Twetter
              <BsTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#29A0B1] rounded-md'>
            <a
              className='flex items-center justify-between w-full text-white'
              href='mailto:yadroshnikov@yahoo.com'
              target='blank'
            >
              Email <FiMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
