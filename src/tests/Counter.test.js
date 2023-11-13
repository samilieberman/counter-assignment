// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  // render(<Counter />);
  const headingElement = screen.getByText(/counter/i);
  expect(headingElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  // render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  // render(<Counter />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  // render(<Counter />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
});
