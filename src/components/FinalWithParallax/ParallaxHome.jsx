import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax1 from '../../assets/parallax/Parallax1.jpg';
import Home from '../../components/Original/Home';
import Navbar from '../Original/Navbar';

function ParallaxHome() {
  return (
    <Parallax
      blur={{ min: -5, max: 15 }}
      bgImage={Parallax1}
      strength={800}
      className='relative'
    >
      <Navbar />
      <Home />
    </Parallax>
  );
}

export default ParallaxHome;
