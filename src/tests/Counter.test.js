import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByRole('button', {name: '+'}));
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByRole('button', {name: '-'}));
  expect(screen.getByText(/-1/i)).toBeInTheDocument();
});
