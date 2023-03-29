import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';
import Tiktok from './components/Tiktok';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Review from './components/Review';
import { createContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const widthContext = createContext();

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <widthContext.Provider value={width}>
      <Helmet>
        <meta
          name="description"
          content="Overlord Delight Cafe Website, Something Delight and Tasty, Mojoroto, Kota Kediri, Jawa Timur "
          data-rh="true"
        />
        <link rel="canonical" href="https://overlord-delight.vercel.app/" />
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Review />
        <Tiktok />
        <Footer />
      </BrowserRouter>
    </widthContext.Provider>
  );
}

export default App;
