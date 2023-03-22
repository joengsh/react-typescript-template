import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TiltWrapper from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/TiltWrapper',
  component: TiltWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TiltWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TiltWrapper> = (args) => <TiltWrapper {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  perspective: 50,
  children: (
    <button
      style={{
        padding: '0 20px',
        height: '45px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '45px',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      Test
    </button>
  ),
};
