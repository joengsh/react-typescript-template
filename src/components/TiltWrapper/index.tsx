import { motion } from 'framer-motion';
import React, { PropsWithChildren, useRef } from 'react';

type Prop = {
  perspective: number;
};

const TiltWrapper: React.FC<PropsWithChildren<Prop>> = ({ children, perspective = 400 }) => {
  const isDebug = useRef(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const tiltX = -(y / height) * 10;
    const tiltY = (x / width) * 10;
    const rotateX = tiltX.toFixed(2) + 'deg';
    const rotateY = tiltY.toFixed(2) + 'deg';
    const element = e.currentTarget.querySelector('#child-container') as HTMLDivElement;
    element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}) rotateY(${rotateY})`;
    element.style.transition = 'none';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget.querySelector('#child-container') as HTMLDivElement;
    element.style.transform = `perspective(${perspective}px) rotateX(0) rotateY(0)`;
    element.style.transition = 'transform 0.5s';
  };

  return (
    <div
      style={{
        backgroundColor: isDebug ? '#ff000060' : 'transparent',
        position: 'relative',
        overflow: 'visible',
        display: 'inline-block',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div id="child-container">{children}</div>
    </div>
  );
};

export default TiltWrapper;
