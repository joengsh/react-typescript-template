import { useMotionValueState } from '@/hooks/useMotionValueState';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { FC, useState, PropsWithChildren } from 'react';
import './index.css';

const Button: FC<PropsWithChildren<{ onClick: () => void }>> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
