import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import Education from './pages/Education';

// test('loading message appears at startup', () => {
//   render(<App />);
//   const loadingElement = screen.getByText(/Loading/i, {exact: false}); // (case-insensitive,
//   expect(loadingElement).toBeInTheDocument();
// });

test('app starts', async () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading.../i, {exact: false}); 
  expect(loadingElement).toBeInTheDocument();
})

test('EE', async () => {
  render(<Education colorSet={[]} />);
  expect(await screen.findByText('Educating Ivan', {exact: false})).toBeVisible()
})


test('UI shows my intro', async () => {
  render(<App />);
  expect(await screen.findByText('SCROLL FOR MORE', {exact: false})).toBeVisible()
})

