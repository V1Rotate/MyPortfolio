import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax2 from '../../assets/parallax/Parallax2.jpg';
import About from '../../components/Original/About';
import Navbar from '../Original/Navbar';

function ParallaxAbout() {
  return (
    <Parallax
      blur={{ min: -10, max: 12 }}
      bgImage={Parallax2}
      className='w-full h-full'
      strength={800}
    >
      <Navbar />
      <About />
    </Parallax>
  );
}

export default ParallaxAbout;
