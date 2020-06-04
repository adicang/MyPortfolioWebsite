import React from 'react';
import Header from '../Header';
import About from '../About';
import Projects from '../Projects';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
    <div className="App">
          <Header />
          <About />
          <Projects />
          <Footer />
    </div>
  );
}

export default App;
