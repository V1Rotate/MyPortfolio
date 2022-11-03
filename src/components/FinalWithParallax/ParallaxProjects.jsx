import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax2 from '../../assets/parallax/Parallax2.jpg';
import Projects from '../../components/Original/Projects';
import Navbar from '../Original/Navbar';

function ParallaxProjects() {
  return (
    <Parallax blur={{ min: -5, max: 15 }} bgImage={Parallax2} strength={800}>
      <Navbar />
      <Projects />
    </Parallax>
  );
}

export default ParallaxProjects;
