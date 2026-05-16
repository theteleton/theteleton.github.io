import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/education"  element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research"   element={<Research />} />
        <Route path="/projects"      element={<Projects />} />
        <Route path="/achievements"  element={<Achievements />} />
        <Route path="/blog"          element={<Blog />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
