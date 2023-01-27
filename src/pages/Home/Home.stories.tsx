import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from './index';

export default {
  title: 'Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    snapshotTest: 'disable',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Normal = Template.bind({});
