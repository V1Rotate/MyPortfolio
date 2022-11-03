import React from 'react';
import { Parallax } from 'react-parallax';
import Parallax2 from '../../assets/parallax/Parallax2.jpg';
import Testimonials from '../../components/Original/Testimonials';
import Navbar from '../Original/Navbar';

function ParallaxTestimonials() {
  return (
    <Parallax blur={{ min: -5, max: 15 }} bgImage={Parallax2} strength={800}>
      <Navbar />
      <Testimonials />
    </Parallax>
  );
}

export default ParallaxTestimonials;
