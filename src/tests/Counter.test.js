import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count')
  expect(count.textContent).toBe('0')
});

test('clicking + increments the count', () => {
  var count = screen.getByTestId('count')
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  var count = screen.getByTestId('count')
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  expect(count.textContent).toBe('-1');
});
