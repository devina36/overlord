import { waves, waves2 } from './assets/waves';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';
import Tiktok from './components/Tiktok';
import Footer from './components/Footer';
import Star from './element/Star';
import Menu from './components/Menu';
import Review from './components/Review';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Review />
      {/* <Star width={40} height={40} spacing={4} value={4.5} /> */}
      <Tiktok />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
