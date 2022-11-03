import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax1 from '../../assets/parallax/Parallax1.jpg';
import Skills from '../../components/Original/Skills';
import Navbar from '../Original/Navbar';

function ParallaxSkills() {
  return (
    <Parallax blur={{ min: -5, max: 15 }} bgImage={Parallax1} strength={800}>
      <Navbar />
      <Skills />
    </Parallax>
  );
}

export default ParallaxSkills;
