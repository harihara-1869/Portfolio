import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Particle from './components/Particle/Particle';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Particle />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Home />
                <About />
                <Projects />
                <Resume />
              </main>
              <Footer />
            </>
          } />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
