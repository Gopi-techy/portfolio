import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: #0a192f;
  color: #8892b0;
`;

const MainContent = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
