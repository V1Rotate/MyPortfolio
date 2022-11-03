import ParallaxHome from './components/FinalWithParallax/ParallaxHome';
import ParallaxAbout from './components/FinalWithParallax/ParallaxAbout';
import ParallaxSkills from './components/FinalWithParallax/ParallaxSkills';
import ParallaxProjects from './components/FinalWithParallax/ParallaxProjects';
import ParallaxProjectsInProgress from './components/FinalWithParallax/ParallaxProjectsInProgress';
import ParallaxTestimonials from './components/FinalWithParallax/ParallaxTestimonials';
import ParallaxContact from './components/FinalWithParallax/ParallaxContact';
import Gap from './components/Original/Gap';
import Footer from './components/Original/Footer';

function App() {
  return (
    <div className='App'>
      <ParallaxHome />
      <Gap />
      <ParallaxAbout />
      <Gap />
      <ParallaxSkills />
      <Gap />
      <ParallaxProjects />
      <Gap />
      <ParallaxProjectsInProgress />
      <Gap />
      <ParallaxTestimonials />
      <Gap />
      <ParallaxContact />
      <Footer />
    </div>
  );
}

export default App;
