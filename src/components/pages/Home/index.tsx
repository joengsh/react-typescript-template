import Footer from '@components/Footer/Footer';
import Hero from '@components/Hero/Hero';
import Carousel from '@/components/Carousel/Carousel';
import React from 'react';
import Logo from '@assets/react.svg';
import 'tw-elements';

function Home() {
  return (
    <div className="Home" data-testid="home">
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

export default Home;
