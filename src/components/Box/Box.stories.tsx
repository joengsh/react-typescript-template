import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '.';

export default {
  title: 'UI/Box',
  component: Box,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Hello</Box>;

export const Normal = Template.bind({});
Normal.args = {};
