// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/count/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByRole('button', { name: /\+/i });
  userEvent.click(incrementButton);
  const incrementedCount = screen.getByText(/1/);
  expect(incrementedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByRole('button', { name: /\-/i });
  userEvent.click(decrementButton);
  const decrementedCount = screen.getByText(/-1/);
  expect(decrementedCount).toBeInTheDocument();
});
