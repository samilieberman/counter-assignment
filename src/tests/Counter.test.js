// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
  fireEvent.click(screen.getByText('+'));
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
  fireEvent.click(screen.getByText('-'));
  expect(count).toHaveTextContent('-1');
});
