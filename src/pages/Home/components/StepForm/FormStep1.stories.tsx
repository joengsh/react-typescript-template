import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormStep1 } from './FormStep';

export default {
  title: 'UI/FormStep1',
  component: FormStep1,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FormStep1>;

const Template: ComponentStory<typeof FormStep1> = (arg) => <FormStep1 {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
  onConfirm: (f, s, e) => {
    console.log(f, s, e);
  },
};
