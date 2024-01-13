import { render, screen } from '@testing-library/react';
import App from './App';

test('make sure I am mentioned', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ivan/i);
  expect(linkElement).toBeInTheDocument();
});
