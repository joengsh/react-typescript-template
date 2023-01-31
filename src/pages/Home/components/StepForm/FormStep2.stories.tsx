import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormStep2 } from './FormStep';

export default {
  title: 'UI/FormStep2',
  component: FormStep2,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FormStep2>;

const Template: ComponentStory<typeof FormStep2> = (arg) => <FormStep2 {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
  onConfirm: (f, s, e) => {
    console.log(f, s, e);
  },
};
