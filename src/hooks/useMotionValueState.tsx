import { MotionValue, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type MotionValueState = [number | string, MotionValue];

export function useMotionValueState(initialValue: number | string): MotionValueState {
  const value = useMotionValue(initialValue);
  const [valueState, setValueState] = useState(value.get());

  useEffect(() => {
    const unsub = value.on('change', (val) => {
      setValueState(val);
    });
    return () => unsub();
  }, []);

  return [valueState, value];
}
