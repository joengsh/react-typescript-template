import Footer from '@components/organisms/Footer/Footer';
import Hero from '@components/organisms/Hero/Hero';
import Carousel from '@components/molecules/Carousel/Carousel';
import React from 'react';
import Logo from '@assets/react.svg';
import Button from '@/components/ui/Button';

function Home() {
  return (
    <div className="Home" data-testid="home">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo className="logo" width={96} height={96} />
        </a>
        <Button variant={'primary'}>Hello</Button>
      </div>
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
