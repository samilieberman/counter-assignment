import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent(-1);
});