import Footer from '@components/organisms/Footer/Footer';
import Hero from '@components/organisms/Hero/Hero';
import Carousel from '@components/molecules/Carousel/Carousel';
import './App.css';
import React from 'react';
import Logo from '@assets/react.svg';
import { useEffect } from 'react';
import 'tw-elements';

function App() {
  useEffect(() => {
    console.log('app');
  }, []);

  return (
    <div className="App" data-testid="app">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo className="logo" width={96} height={96} />
        </a>
      </div>
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
