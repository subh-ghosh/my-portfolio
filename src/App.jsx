import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <Profile />
      <Experience />
      <Awards />
      <FAQ />
      <Footer />
    </>
  );
}
