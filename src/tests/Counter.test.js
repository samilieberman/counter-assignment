import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() =>
  render(<Counter />);
});

test('counter working', () => {
  const heading = screen.getByText(/Counter/i);
  expect(heading).toBeInTheDocument();
});

test('0 val', () => {
  const intCount = screen.getByTestId('count');
  expect(intCount).toHaveTextContent('0');
});

test('increment count', () => {
  const increment = screen.getByRole('button', { name: '+' });
  fireEvent.click(increment);
  const incremented = screen.getByTestId('count');
  expect(incremented).toHaveTextContent('1');

  test('decrement count', () => {
    const decrement = screen.getByRole('button', { name: '-' });
    fireEvent.click(decrement);
    const decremented = screen.getByTestId('count');
    expect(decremented).toHaveTextContent('-1');
  });
