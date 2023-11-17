import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders Counter title', () => {
  const counterTitle = screen.getByText('Counter');
  expect(counterTitle).toBeInTheDocument();
});

test('renders initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const addButton = screen.getByRole('button', { name: '+' });
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(addButton);
  expect(countDisplay).toHaveTextContent('1');

  fireEvent.click(addButton);
  expect(countDisplay).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  const subtractButton = screen.getByRole('button', { name: '-' });
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(subtractButton);
  expect(countDisplay).toHaveTextContent('-1');

  fireEvent.click(subtractButton);
  expect(countDisplay).toHaveTextContent('-2');
});
