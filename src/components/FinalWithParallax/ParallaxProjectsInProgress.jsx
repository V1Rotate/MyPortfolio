import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax1 from '../../assets/parallax/Parallax1.jpg';
import ProjectsInProgress from '../Original/ProjectsInProgress';
import Navbar from '../Original/Navbar';

function ParallaxProjectsInProgress() {
  return (
    <Parallax blur={{ min: -5, max: 15 }} bgImage={Parallax1} strength={800}>
      <Navbar />
      <ProjectsInProgress />
    </Parallax>
  );
}

export default ParallaxProjectsInProgress;
