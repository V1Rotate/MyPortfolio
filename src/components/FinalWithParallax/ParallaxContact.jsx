import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax1 from '../../assets/parallax/Parallax1.jpg';
import Contact from '../../components/Original/Contact';
import Navbar from '../Original/Navbar';

function ParallaxContact() {
  return (
    <Parallax blur={{ min: -5, max: 15 }} bgImage={Parallax1} strength={800}>
      <Navbar />
      <Contact />
    </Parallax>
  );
}

export default ParallaxContact;
