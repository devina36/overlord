import { waves, waves2 } from './assets/waves';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';
import Tiktok from './components/Tiktok';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <div className="w-full">
        <img src={waves} alt="waves" />
      </div>
      <About />
      <div>
        <img src={waves2} alt="waves2" />
      </div>

      <Tiktok />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
