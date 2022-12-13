import React from 'react';
import './app.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import LoginSection from './components/LoginSection/LoginSection';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LoginSection />
      <Footer />
    </div>
  );
};
export default App;
