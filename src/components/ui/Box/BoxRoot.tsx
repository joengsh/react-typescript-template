/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import tw, { css, theme } from 'twin.macro';

type BoxProps = {
  ownerState: {
    variant: 'contained' | 'gradient';
    bgColor: string;
    color: string;
    opacity: number;
    borderRadius: string;
    shadow: string;
  };
};

export default styled(Box)<BoxProps>(({ theme: _t, ownerState }) => {
  const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;

  const validColors = [tw`text-electric`, tw`text-ribbon`];

  // background value
  const backgroundValue: any = bgColor;

  // color value
  const colorValue: any = color;

  return [
    // css`
    //   ${validColors[1]}
    // `,
    css`
      background-color: ${backgroundValue};
      color: ${colorValue};
    `,
  ];
});
