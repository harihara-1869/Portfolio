import Particle from './components/Particle/Particle';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Particle />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
