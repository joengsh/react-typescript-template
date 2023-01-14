import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Page.stories';

const { LoggedIn } = composeStories(stories);
// const { Primary, Secondary, Large, Small } = composeStories(stories);

it('renders in the loading state', async () => {
  const { container } = render(<LoggedIn />);
  await expect(LoggedIn.play({ canvasElement: container })).resolves.not.toThrowError();
});
