import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormStep3 } from './FormStep';

export default {
  title: 'UI/FormStep3',
  component: FormStep3,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FormStep3>;

const Template: ComponentStory<typeof FormStep3> = (arg) => <FormStep3 {...arg} />;

export const Normal = Template.bind({});
Normal.args = {
  onConfirm: (c) => {
    console.log(c);
  },
};
