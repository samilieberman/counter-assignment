import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter'; 
beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with a value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const addButton = screen.getByText('+');
  fireEvent.click(addButton);

  const incrementedCount = screen.getByTestId('count');
  expect(incrementedCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);

  const decrementedCount = screen.getByTestId('count');
  expect(decrementedCount).toHaveTextContent('-1');
});
