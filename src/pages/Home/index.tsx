import Footer from '@components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Carousel from '@/pages/Home/components/Carousel/Carousel';
import React, { useState } from 'react';
import Logo from '@assets/react.svg';
import Button from '@components/Button';
import { FormStep1 } from './components/StepForm/FormStep';
import 'twin.macro';

function Home() {
  const [data, setData] = useState({});
  const onStep1Confirm = (firstname: string, surname: string, email: string) => {
    setData({
      ...data,
      ...{
        firstname,
        surname,
        email,
      },
    });
  };

  return (
    <div className="Home" data-testid="home">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo className="logo" width={96} height={96} />
        </a>
        <Button variant={'primary'}>Hello</Button>
      </div>
      <Hero />
      <FormStep1 onConfirm={onStep1Confirm} />
      <div>{JSON.stringify(data)}</div>
      <Footer />
    </div>
  );
}

export default Home;
