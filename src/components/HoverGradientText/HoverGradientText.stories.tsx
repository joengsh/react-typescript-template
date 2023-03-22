import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HoverGradientText from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/HoverGradientText',
  component: HoverGradientText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HoverGradientText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HoverGradientText> = (args) => (
  <HoverGradientText {...args} />
);
const Template2: ComponentStory<any> = () => (
  <>
    <HoverGradientText startColor="#ff0" endColor="#0ff">
      hello world
    </HoverGradientText>
    <HoverGradientText startColor="#f3ec78" endColor="#e7825e">
      hello world
    </HoverGradientText>
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  startColor: '#f3ec78',
  endColor: '#e7825e',
  children: 'boom boom boom boom',
};

export const Secondary = Template2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
