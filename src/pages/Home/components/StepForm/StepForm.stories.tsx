import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StepForm from '.';

export default {
  title: 'UI/StepForm',
  component: StepForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof StepForm>;

const Template: ComponentStory<typeof StepForm> = (arg) => <StepForm />;

export const Normal = Template.bind({});
