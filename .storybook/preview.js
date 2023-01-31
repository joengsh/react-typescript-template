import '../src/index.css';
import React from 'react';
import 'twin.macro';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['UI', ['StepForm', 'FormStep1', 'FormStep2', 'FormStep3'], 'Example'],
      locales: 'en-US',
    },
  },
};
