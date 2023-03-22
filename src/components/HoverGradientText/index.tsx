import React, { PropsWithChildren, useEffect } from 'react';

import styled from '@emotion/styled';

type Props = {
  startColor?: string;
  endColor: string;
  color?: string;
  duration?: string;
  thickness?: string;
};

const HoverGradientText = styled.div<Props>`
  display: inline-block;
  padding: 0 0.4em;
  color: #0000;
  background: linear-gradient(
        90deg,
        ${(props) => props.startColor ?? props.endColor} 0%,
        ${(props) => props.endColor} 50%,
        ${(props) => props.color || '#fff'} 0
      )
      100% 0%/ 200% 100% no-repeat,
    linear-gradient(${(props) => props.endColor} 0 0) 0% 50% /
      ${(props) => props.thickness || '0.2em'} 100% no-repeat;
  transition: ${(props) => props.duration || '0.2s'} ${(props) => props.duration || '0.2s'} linear,
    background-size ${(props) => props.duration || '0.2s'} 0s;

  background-clip: text, padding-box;
  -webkit-background-clip: text, padding-box;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text, padding-box;
  -moz-text-fill-color: transparent;
  &:hover {
    transition-delay: 0s, ${(props) => props.duration || '0.2s'};
    background-position: 0% 0%, 100% 50%;
    background-size: 200% 100%, ${(props) => props.thickness || '0.2em'} 0%;
    --_s: ${(props) => props.duration};
  }
`;

export default HoverGradientText;
